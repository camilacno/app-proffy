import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import authConfig from '../config/auth';
import { Request, Response, NextFunction } from 'express';

export default async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  jwt.verify(authHeader, authConfig.secret, (err, decoded) => {
    if (err) return res.status(401).send({ error: 'Invalid Token.' });

    req.id = decoded.id;
    return next();
  });

  // try {
  //   const decoded = await promisify(jwt.verify)(authHeader, authConfig.secret);
  //   req.id = decoded.id;
  //   return next();
  // } catch (err) {
  //   return res.status(401).json({ error: 'Token not valid' });
  // }
};
