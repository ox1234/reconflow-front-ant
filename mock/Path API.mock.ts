// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /result/path/list': (req: Request, res: Response) => {
    res.status(200).send({ data: null, success: false, total: 89 });
  },
};
