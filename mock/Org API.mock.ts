// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /result/org/create': (req: Request, res: Response) => {
    res.status(200).send({ code: 63, data: null, msg: '采通效位队两那报难分现定及造布步究只。' });
  },
  'POST /result/org/list': (req: Request, res: Response) => {
    res.status(200).send({ data: null, success: true, total: 81 });
  },
};
