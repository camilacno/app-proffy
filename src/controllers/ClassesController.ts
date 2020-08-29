import { Request, Response } from 'express';

import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

export default class ClassesController {
  async index(req: Request, res: Response) {
    console.log('rota index classes chamada');
    const { id } = req.params;

    const trx = await db.transaction();
    const classes = await trx
      .select()
      .from('classes')
      .where({ id: id })
      .then(row => row);

    return res.status(200).json(classes);
  }

  async find(req: Request, res: Response) {
    const filters = req.query;

    const subject = filters.subject as string;
    const week_day = filters.week_day as string;
    const time = filters.time as string;

    if (!filters.week_day || !filters.subject || !filters.time) {
      return res
        .status(400)
        .json({ error: 'Inform filters to search for classes' });
    }

    const timeInMinutes = convertHourToMinutes(time);

    const classes = await db('classes')
      .whereExists(function () {
        this.select('class_schedule.*')
          .from('class_schedule')
          .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
          .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
          .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
          .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes]);
      })
      .where('classes.subject', '=', subject)
      .join('users', 'classes.user_id', '=', 'users.id')
      .select(['classes.*', 'users.*']);
    // .where('classes.week_day', '=', week_day)
    // .where('classes.time', '=', time)

    return res.json(classes);
  }

  async create(req: Request, res: Response) {
    console.log('rota create chamada');
    const { whatsapp, bio, subject, cost, schedule } = req.body;
    const user_id = req.id;

    console.log(whatsapp, bio, subject, cost, schedule, user_id);

    const trx = await db.transaction();

    try {
      await trx('users').where({ id: user_id }).update({ whatsapp, bio });

      const insertedClassesIds = await trx('classes').insert({
        subject,
        cost,
        user_id,
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
        .json({ error: 'Unexpected error while creating new class' });
    }
  }
}
