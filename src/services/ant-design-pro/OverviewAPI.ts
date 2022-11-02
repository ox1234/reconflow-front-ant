// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 查询目前扫描结果的数量 GET /overview/scan/count */
export async function getOverviewScanCount(options?: { [key: string]: any }) {
  return request<API.JSONResult>('/overview/scan/count', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取所有队列的长度和线程数量 GET /overview/scan/queue */
export async function getOverviewScanQueue(options?: { [key: string]: any }) {
  return request<API.JSONResult>('/overview/scan/queue', {
    method: 'GET',
    ...(options || {}),
  });
}
