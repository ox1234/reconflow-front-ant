// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /task/scan/list': (req: Request, res: Response) => {
    res.status(200).send({ data: null, success: true, total: 85 });
  },
  'POST /task/scan/org': (req: Request, res: Response) => {
    res.status(200).send({ code: 62, data: null, msg: '山发带点来等事强列还党前引包。' });
  },
  'POST /task/scan/submit': (req: Request, res: Response) => {
    res.status(200).send({ code: 84, data: null, msg: '原作效平极表此它目程济正志究热本入。' });
  },
};
