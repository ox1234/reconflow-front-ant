// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 刷新配置文件 POST /setting/refresh */
export async function postSettingRefresh(body: number[], options?: { [key: string]: any }) {
  return request<API.PageableResult>('/setting/refresh', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取当前所有扫描器的开启状态 GET /setting/status */
export async function getSettingStatus(options?: { [key: string]: any }) {
  return request<API.JSONResult>('/setting/status', {
    method: 'GET',
    ...(options || {}),
  });
}
