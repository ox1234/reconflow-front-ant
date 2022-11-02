// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /setting/refresh': (req: Request, res: Response) => {
    res.status(200).send({ data: null, success: true, total: 68 });
  },
  'GET /setting/status': (req: Request, res: Response) => {
    res.status(200).send({ code: 63, data: null, msg: '走究七青共包长本式也队则而却叫指反。' });
  },
};
