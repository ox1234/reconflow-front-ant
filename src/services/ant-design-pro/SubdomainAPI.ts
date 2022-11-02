// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 查询特定子域名的基本信息 POST /result/subdomain/info */
export async function postResultSubdomainInfo(
  body: API.SubdomainReq,
  options?: { [key: string]: any },
) {
  return request<API.JSONResult>('/result/subdomain/info', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 查询根域名对应的所有子域名 POST /result/subdomain/list */
export async function postResultSubdomainList(
  body: API.ListSubdomainReq,
  options?: { [key: string]: any },
) {
  return request<API.PageableResult>('/result/subdomain/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 为子域名添加备注信息 POST /result/subdomain/remark */
export async function postResultSubdomainRemark(
  body: API.SubdomainRemarkReq,
  options?: { [key: string]: any },
) {
  return request<API.JSONResult>('/result/subdomain/remark', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
