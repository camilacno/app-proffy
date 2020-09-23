import { Request, Response, response } from 'express';
import bcrypt from 'bcryptjs';

import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';

export default class UsersController {
  async update(req: Request, res: Response) {
    console.log('rota update user chamada');
    const id = req.id;
    console.log('id ->', id);

    const {
      name,
      last_name,
      email,
      whatsapp,
      bio,
      subject,
      cost,
      schedule,
    } = req.body;

    console.log('rota pegou os dados do body');

    const trx = await db.transaction();

    try {
      await trx('users')
        .where({ id: id })
        .update({ name, last_name, email, whatsapp, bio });

      console.log('rota alterou os dados de user');

      const insertedClassesIds = await trx('classes').insert({
        subject,
        cost,
        user_id: id,
      });

      const class_id = insertedClassesIds[0];

      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          class_id,
          week_day: scheduleItem.week_day,
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to),
        };
      });

      await trx('class_schedule').insert(classSchedule);

      await trx.commit();

      return res.status(201).send();
    } catch (err) {
      await trx.rollback();

      return res
        .status(400)
        .json({ error: 'Unexpected error while updating information' });
    }
  }

  async find(req: Request, res: Response) {
    console.log('rota find chamada');
    const { id } = req.params;

    console.log(id);

    const trx = await db.transaction();
    const user = await trx
      .select()
      .from('users')
      .where({ id: id })
      .then(row => row);

    console.log(user[0]);

    return res.status(200).json(user[0]);
  }

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
    const {
      avatar,
      name,
      last_name,
      whatsapp,
      is_proffy,
      email,
      password,
    } = req.body;

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
        avatar,
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
