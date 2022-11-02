// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 展示目标资产的信息 GET /asset/list */
export async function getAssetList(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAssetListParams,
  options?: { [key: string]: any },
) {
  return request<API.JSONResult>('/asset/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 刷新目标资产的域名信息 GET /asset/refresh */
export async function getAssetRefresh(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAssetRefreshParams,
  options?: { [key: string]: any },
) {
  return request<API.JSONResult>('/asset/refresh', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
