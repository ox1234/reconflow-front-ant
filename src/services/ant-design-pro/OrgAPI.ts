// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 创建组织和域名 POST /result/org/create */
export async function postResultOrgCreate(
  body: API.CreateOrgReq,
  options?: { [key: string]: any },
) {
  return request<API.JSONResult>('/result/org/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 列出所有组织 POST /result/org/list */
export async function postResultOrgList(body: API.ListOrgReq, options?: { [key: string]: any }) {
  return request<API.PageableResult>('/result/org/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
