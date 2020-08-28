import { Request, Response, response } from 'express';
import bcrypt from 'bcryptjs';

import db from '../database/connection';
import generateToken from '../utils/generateToken';

export default class SessionsController {
  async store(req: Request, res: Response) {
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
