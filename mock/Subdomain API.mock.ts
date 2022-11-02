// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /result/subdomain/info': (req: Request, res: Response) => {
    res.status(200).send({ code: 83, data: null, msg: '正导地解出治济要思变干据准光。' });
  },
  'POST /result/subdomain/list': (req: Request, res: Response) => {
    res.status(200).send({ data: null, success: true, total: 61 });
  },
  'POST /result/subdomain/remark': (req: Request, res: Response) => {
    res.status(200).send({ code: 65, data: null, msg: '其品革论打影计转低许为发主率观完意。' });
  },
};
