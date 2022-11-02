// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 列出定时任务 POST /schedule/list */
export async function postScheduleList(
  body: API.ScheduleListReq,
  options?: { [key: string]: any },
) {
  return request<API.PageableResult>('/schedule/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 为组织设置定时任务 POST /schedule/set */
export async function postScheduleSet(body: API.SetOrgCronReq, options?: { [key: string]: any }) {
  return request<API.JSONResult>('/schedule/set', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
