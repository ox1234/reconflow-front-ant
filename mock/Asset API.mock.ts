// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /asset/list': (req: Request, res: Response) => {
    res.status(200).send({ code: 86, data: null, msg: '查改现意花内节报此厂参位复那原。' });
  },
  'GET /asset/refresh': (req: Request, res: Response) => {
    res.status(200).send({ code: 95, data: null, msg: '表证转各进料方东眼斗查物非。' });
  },
};
