// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 查询子域名对应所有的API POST /result/js/api */
export async function postResultJsApi(body: API.SubdomainReq, options?: { [key: string]: any }) {
  return request<API.JSONResult>('/result/js/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询子域名拥有的JS文件 POST /result/js/list */
export async function postResultJsList(body: API.ListJSReq, options?: { [key: string]: any }) {
  return request<API.PageableResult>('/result/js/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 根据JS文件反查所有子域名 POST /result/js/reverse */
export async function postResultJsReverse(
  body: API.ReverseJSReq,
  options?: { [key: string]: any },
) {
  return request<API.PageableResult>('/result/js/reverse', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询子域名对应所有的URL POST /result/js/url */
export async function postResultJsUrl(body: API.SubdomainReq, options?: { [key: string]: any }) {
  return request<API.JSONResult>('/result/js/url', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
