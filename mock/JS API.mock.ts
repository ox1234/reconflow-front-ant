// @ts-ignore
import { Request, Response } from 'express';

export default {
  'POST /result/js/api': (req: Request, res: Response) => {
    res.status(200).send({ code: 67, data: null, msg: '议并报面品运体包选专角给张手层型八。' });
  },
  'POST /result/js/list': (req: Request, res: Response) => {
    res.status(200).send({ data: null, success: false, total: 75 });
  },
  'POST /result/js/reverse': (req: Request, res: Response) => {
    res.status(200).send({ data: null, success: false, total: 93 });
  },
  'POST /result/js/url': (req: Request, res: Response) => {
    res.status(200).send({ code: 77, data: null, msg: '而每至又下持算少世大也引但较研带。' });
  },
};
