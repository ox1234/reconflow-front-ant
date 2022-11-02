// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /result/ip/list': (req: Request, res: Response) => {
    res.status(200).send({ data: null, success: false, total: 98 });
  },
  'POST /result/ip/reverse': (req: Request, res: Response) => {
    res.status(200).send({ data: null, success: false, total: 92 });
  },
};
