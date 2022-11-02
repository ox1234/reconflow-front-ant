// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /schedule/list': (req: Request, res: Response) => {
    res.status(200).send({ data: null, success: false, total: 88 });
  },
  'POST /schedule/set': (req: Request, res: Response) => {
    res.status(200).send({ code: 84, data: null, msg: '近心美资界适回我内质手者成至需。' });
  },
};
