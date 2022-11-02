// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 列出扫描任务 POST /task/scan/list */
export async function postTaskScanList(body: API.TaskListReq, options?: { [key: string]: any }) {
  return request<API.PageableResult>('/task/scan/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 发起扫描任务 POST /task/scan/org */
export async function postTaskScanOrg(body: API.OrgScanReq, options?: { [key: string]: any }) {
  return request<API.JSONResult>('/task/scan/org', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 发起扫描任务 POST /task/scan/submit */
export async function postTaskScanSubmit(
  body: API.TaskSubmitReq,
  options?: { [key: string]: any },
) {
  return request<API.JSONResult>('/task/scan/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
