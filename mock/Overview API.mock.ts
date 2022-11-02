// @ts-ignore
import { Request, Response } from 'express';

export default {
  'GET /overview/scan/count': (req: Request, res: Response) => {
    res.status(200).send({ code: 63, data: null, msg: '任关一性京色地己生或那就运听两机对系。' });
  },
  'GET /overview/scan/queue': (req: Request, res: Response) => {
    res.status(200).send({ code: 79, data: null, msg: '个常用路眼口面给利组六专是。' });
  },
};
