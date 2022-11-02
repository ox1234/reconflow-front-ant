// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 查询子域名对应的ip POST /result/ip/list */
export async function postResultIpList(body: API.ListIPReq, options?: { [key: string]: any }) {
  return request<API.PageableResult>('/result/ip/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 反查ip对应的子域名 POST /result/ip/reverse */
export async function postResultIpReverse(
  body: API.ReverseIPReq,
  options?: { [key: string]: any },
) {
  return request<API.PageableResult>('/result/ip/reverse', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
