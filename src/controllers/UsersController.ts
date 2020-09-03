import { Request, Response, response } from 'express';
import bcrypt from 'bcryptjs';

import db from '../database/connection';

export default class UsersController {
  async index(req: Request, res: Response) {
    console.log('rota index chamada');
    const trx = await db.transaction();
    const users = await trx
      .select()
      .from('users')
      .then(row => row);

    return res.status(200).json(users);
  }

  async create(req: Request, res: Response) {
    const { name, last_name, whatsapp, is_proffy, email, password } = req.body;

    console.log('rota create chamada');

    const trx = await db.transaction();

    try {
      const checkUserExistis = await trx('users').where({ email: email });

      if (checkUserExistis.length > 0) {
        return res
          .status(400)
          .json({ error: 'This email is already in the system' });
      }

      const hashed_password = await bcrypt.hash(password, 10);

      const insertedUser = await trx('users').insert({
        name,
        last_name,
        whatsapp,
        is_proffy,
        email,
        password: hashed_password,
      });

      await trx.commit();

      return res.status(201).send();
    } catch (err) {
      await trx.rollback();

      return res
        .status(400)
        .json({ error: 'Unexpected error while creating user' });
    }
  }
}
