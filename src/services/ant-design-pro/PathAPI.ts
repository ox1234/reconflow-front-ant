// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 查询子域名对应的path POST /result/path/list */
export async function postResultPathList(body: API.ListPathReq, options?: { [key: string]: any }) {
  return request<API.PageableResult>('/result/path/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
