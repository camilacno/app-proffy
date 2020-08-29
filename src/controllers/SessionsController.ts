import { Request, Response, response } from 'express';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

import db from '../database/connection';
import generateToken from '../utils/generateToken';
import mailer from '../modules/mailer';

export default class SessionsController {
  async forgotPassword(req: Request, res: Response) {
    console.log('rota forgot-password chamada');
    const { email } = req.body;
    const id = req.id;

    const trx = await db.transaction();

    try {
      const user = await trx
        .select()
        .from('users')
        .where({ id: id })
        .first()
        .then(row => row);

      if (!user) {
        return res.status(401).json({ error: 'User not found' });
      }

      const token = crypto.randomBytes(20).toString('hex');
      const now = new Date();
      now.setHours(now.getHours() + 1);

      await trx('users')
        .where({ id: id })
        .update({ passwordResetToken: token, passwordResetExpires: now });

      await trx.commit();

      mailer.sendMail(
        {
          to: email,
          from: 'suporte@proffy.com.br',
          html: { path: 'src/resources/mail/session/forgot-password.html' },
          subject: 'Solicitação de senha',
          context: { token: token },
        },
        err => {
          if (err) {
            res.status(400).send({ error: 'Error sending email, try again.' });
          }
          return res.send();
        },
      );

      res.status(201).send();
    } catch (err) {
      console.log(err);
      res.status(400).send({ error: 'Error processing request, try again.' });
    }
  }

  async resetPassword(req: Request, res: Response) {
    console.log('rota reset-password chamada');
    const { email, token, password } = req.body;
    // const id = req.id;

    const trx = await db.transaction();

    try {
      const user = await trx
        .select()
        .from('users')
        .where({ email: email })
        .first()
        .then(row => row);

      if (!user) {
        return res.status(401).json({ error: 'User not found' });
      }

      const userToken = user.passwordResetToken;
      const tokenExpires = user.passwordResetExpires;

      if (token !== userToken) {
        return res.status(401).json({ error: 'Invalid token' });
      }

      const now = new Date();

      if (now > tokenExpires) {
        return res
          .status(401)
          .json({ error: 'Expired token, please request another one.' });
      }

      await trx('users').where({ email: email }).update({ password });

      await trx.commit();

      res.status(201).send({ error: 'Password updated successfully' });
    } catch (err) {
      console.log(err);
      res.status(400).send({ error: 'Error updating password, try again' });
    }
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const trx = await db.transaction();

    const user = await trx
      .select()
      .from('users')
      .where({ email: email })
      .first()
      .then(row => row);

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    const userPassword = user.password;

    if (!(await bcrypt.compare(password, userPassword))) {
      return res.status(400).send({ error: 'Incorrect password' });
    }

    const token = generateToken({ id: user.id });

    return res.json({
      user: {
        id: user.id,
        name: user.name,
        email,
        bio: user.bio,
        whatsapp: user.whatsapp,
      },
      token,
    });
  }
}
