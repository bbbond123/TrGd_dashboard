/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

// @ts-ignore
// prettier-ignore
import { QueryStringArrayFormat, Method, RequestBodyType, ResponseBodyType, FileData, prepare } from 'yapi-to-typescript'
// @ts-ignore
// prettier-ignore
import type { RequestConfig, RequestFunctionRestArgs } from 'yapi-to-typescript'
// @ts-ignore
import request from '../request'

type UserRequestRestArgs = RequestFunctionRestArgs<typeof request>

// Request: 目前 React Hooks 功能有用到
export type Request<
  TRequestData,
  TRequestConfig extends RequestConfig,
  TRequestResult,
> = (TRequestConfig['requestDataOptional'] extends true
  ? (requestData?: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult
  : (requestData: TRequestData, ...args: RequestFunctionRestArgs<typeof request>) => TRequestResult) & {
  requestConfig: TRequestConfig
}

const mockUrl_0_0_0_12 = 'https://yapi.ifoodme.com/mock/11' as any
const devUrl_0_0_0_12 = '' as any
const prodUrl_0_0_0_12 = 'https://www.ifoodme.com' as any
const dataKey_0_0_0_12 = undefined as any

/**
 * 接口 [更新通知↗](https://yapi.ifoodme.com/project/11/interface/api/338) 的 **请求类型**
 *
 * @分类 [Notices↗](https://yapi.ifoodme.com/project/11/interface/api/cat_71)
 * @标签 `Notices`
 * @请求头 `PUT /api/notices`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPutNoticesRequest {}

/**
 * 接口 [更新通知↗](https://yapi.ifoodme.com/project/11/interface/api/338) 的 **返回类型**
 *
 * @分类 [Notices↗](https://yapi.ifoodme.com/project/11/interface/api/cat_71)
 * @标签 `Notices`
 * @请求头 `PUT /api/notices`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPutNoticesResponse {}

/**
 * 接口 [更新通知↗](https://yapi.ifoodme.com/project/11/interface/api/338) 的 **请求配置的类型**
 *
 * @分类 [Notices↗](https://yapi.ifoodme.com/project/11/interface/api/cat_71)
 * @标签 `Notices`
 * @请求头 `PUT /api/notices`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiPutNoticesRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/notices',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [更新通知↗](https://yapi.ifoodme.com/project/11/interface/api/338) 的 **请求配置**
 *
 * @分类 [Notices↗](https://yapi.ifoodme.com/project/11/interface/api/cat_71)
 * @标签 `Notices`
 * @请求头 `PUT /api/notices`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiPutNoticesRequestConfig: ApiPutNoticesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_12,
  devUrl: devUrl_0_0_0_12,
  prodUrl: prodUrl_0_0_0_12,
  path: '/api/notices',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_12,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutNotices',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [更新通知↗](https://yapi.ifoodme.com/project/11/interface/api/338) 的 **请求函数**
 *
 * @分类 [Notices↗](https://yapi.ifoodme.com/project/11/interface/api/cat_71)
 * @标签 `Notices`
 * @请求头 `PUT /api/notices`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiPutNotices = /*#__PURE__*/ (requestData?: ApiPutNoticesRequest, ...args: UserRequestRestArgs) => {
  return request<ApiPutNoticesResponse>(prepare(apiPutNoticesRequestConfig, requestData), ...args)
}

apiPutNotices.requestConfig = apiPutNoticesRequestConfig

/**
 * 接口 [新建通知↗](https://yapi.ifoodme.com/project/11/interface/api/344) 的 **请求类型**
 *
 * @分类 [Notices↗](https://yapi.ifoodme.com/project/11/interface/api/cat_71)
 * @标签 `Notices`
 * @请求头 `POST /api/notices`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostNoticesRequest {}

/**
 * 接口 [新建通知↗](https://yapi.ifoodme.com/project/11/interface/api/344) 的 **返回类型**
 *
 * @分类 [Notices↗](https://yapi.ifoodme.com/project/11/interface/api/cat_71)
 * @标签 `Notices`
 * @请求头 `POST /api/notices`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostNoticesResponse {}

/**
 * 接口 [新建通知↗](https://yapi.ifoodme.com/project/11/interface/api/344) 的 **请求配置的类型**
 *
 * @分类 [Notices↗](https://yapi.ifoodme.com/project/11/interface/api/cat_71)
 * @标签 `Notices`
 * @请求头 `POST /api/notices`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiPostNoticesRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/notices',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [新建通知↗](https://yapi.ifoodme.com/project/11/interface/api/344) 的 **请求配置**
 *
 * @分类 [Notices↗](https://yapi.ifoodme.com/project/11/interface/api/cat_71)
 * @标签 `Notices`
 * @请求头 `POST /api/notices`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiPostNoticesRequestConfig: ApiPostNoticesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_12,
  devUrl: devUrl_0_0_0_12,
  prodUrl: prodUrl_0_0_0_12,
  path: '/api/notices',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_12,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostNotices',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [新建通知↗](https://yapi.ifoodme.com/project/11/interface/api/344) 的 **请求函数**
 *
 * @分类 [Notices↗](https://yapi.ifoodme.com/project/11/interface/api/cat_71)
 * @标签 `Notices`
 * @请求头 `POST /api/notices`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiPostNotices = /*#__PURE__*/ (requestData?: ApiPostNoticesRequest, ...args: UserRequestRestArgs) => {
  return request<ApiPostNoticesResponse>(prepare(apiPostNoticesRequestConfig, requestData), ...args)
}

apiPostNotices.requestConfig = apiPostNoticesRequestConfig

/**
 * 接口 [获取通知列表↗](https://yapi.ifoodme.com/project/11/interface/api/350) 的 **请求类型**
 *
 * @分类 [Notices↗](https://yapi.ifoodme.com/project/11/interface/api/cat_71)
 * @标签 `Notices`
 * @请求头 `POST /api/notices/list`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostNoticesListRequest {}

/**
 * 接口 [获取通知列表↗](https://yapi.ifoodme.com/project/11/interface/api/350) 的 **返回类型**
 *
 * @分类 [Notices↗](https://yapi.ifoodme.com/project/11/interface/api/cat_71)
 * @标签 `Notices`
 * @请求头 `POST /api/notices/list`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostNoticesListResponse {}

/**
 * 接口 [获取通知列表↗](https://yapi.ifoodme.com/project/11/interface/api/350) 的 **请求配置的类型**
 *
 * @分类 [Notices↗](https://yapi.ifoodme.com/project/11/interface/api/cat_71)
 * @标签 `Notices`
 * @请求头 `POST /api/notices/list`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiPostNoticesListRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/notices/list',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [获取通知列表↗](https://yapi.ifoodme.com/project/11/interface/api/350) 的 **请求配置**
 *
 * @分类 [Notices↗](https://yapi.ifoodme.com/project/11/interface/api/cat_71)
 * @标签 `Notices`
 * @请求头 `POST /api/notices/list`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiPostNoticesListRequestConfig: ApiPostNoticesListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_12,
  devUrl: devUrl_0_0_0_12,
  prodUrl: prodUrl_0_0_0_12,
  path: '/api/notices/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_12,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostNoticesList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取通知列表↗](https://yapi.ifoodme.com/project/11/interface/api/350) 的 **请求函数**
 *
 * @分类 [Notices↗](https://yapi.ifoodme.com/project/11/interface/api/cat_71)
 * @标签 `Notices`
 * @请求头 `POST /api/notices/list`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiPostNoticesList = /*#__PURE__*/ (
  requestData?: ApiPostNoticesListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostNoticesListResponse>(prepare(apiPostNoticesListRequestConfig, requestData), ...args)
}

apiPostNoticesList.requestConfig = apiPostNoticesListRequestConfig

/**
 * 接口 [获取通知↗](https://yapi.ifoodme.com/project/11/interface/api/356) 的 **请求类型**
 *
 * @分类 [Notices↗](https://yapi.ifoodme.com/project/11/interface/api/cat_71)
 * @标签 `Notices`
 * @请求头 `GET /api/notices/{notice_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiGetNoticesNoticeIdRequest {
  /**
   * 通知ID
   */
  notice_id: string
}

/**
 * 接口 [获取通知↗](https://yapi.ifoodme.com/project/11/interface/api/356) 的 **返回类型**
 *
 * @分类 [Notices↗](https://yapi.ifoodme.com/project/11/interface/api/cat_71)
 * @标签 `Notices`
 * @请求头 `GET /api/notices/{notice_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiGetNoticesNoticeIdResponse {}

/**
 * 接口 [获取通知↗](https://yapi.ifoodme.com/project/11/interface/api/356) 的 **请求配置的类型**
 *
 * @分类 [Notices↗](https://yapi.ifoodme.com/project/11/interface/api/cat_71)
 * @标签 `Notices`
 * @请求头 `GET /api/notices/{notice_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiGetNoticesNoticeIdRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/notices/{notice_id}',
    undefined,
    'notice_id',
    string,
    false
  >
>

/**
 * 接口 [获取通知↗](https://yapi.ifoodme.com/project/11/interface/api/356) 的 **请求配置**
 *
 * @分类 [Notices↗](https://yapi.ifoodme.com/project/11/interface/api/cat_71)
 * @标签 `Notices`
 * @请求头 `GET /api/notices/{notice_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiGetNoticesNoticeIdRequestConfig: ApiGetNoticesNoticeIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_12,
  devUrl: devUrl_0_0_0_12,
  prodUrl: prodUrl_0_0_0_12,
  path: '/api/notices/{notice_id}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_12,
  paramNames: ['notice_id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetNoticesNotice_id',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取通知↗](https://yapi.ifoodme.com/project/11/interface/api/356) 的 **请求函数**
 *
 * @分类 [Notices↗](https://yapi.ifoodme.com/project/11/interface/api/cat_71)
 * @标签 `Notices`
 * @请求头 `GET /api/notices/{notice_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiGetNoticesNotice_id = /*#__PURE__*/ (
  requestData: ApiGetNoticesNoticeIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiGetNoticesNoticeIdResponse>(prepare(apiGetNoticesNoticeIdRequestConfig, requestData), ...args)
}

apiGetNoticesNotice_id.requestConfig = apiGetNoticesNoticeIdRequestConfig

/**
 * 接口 [删除通知↗](https://yapi.ifoodme.com/project/11/interface/api/362) 的 **请求类型**
 *
 * @分类 [Notices↗](https://yapi.ifoodme.com/project/11/interface/api/cat_71)
 * @标签 `Notices`
 * @请求头 `DELETE /api/notices/{notice_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiDeleteNoticesNoticeIdRequest {
  /**
   * 通知ID
   */
  notice_id: string
}

/**
 * 接口 [删除通知↗](https://yapi.ifoodme.com/project/11/interface/api/362) 的 **返回类型**
 *
 * @分类 [Notices↗](https://yapi.ifoodme.com/project/11/interface/api/cat_71)
 * @标签 `Notices`
 * @请求头 `DELETE /api/notices/{notice_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiDeleteNoticesNoticeIdResponse {}

/**
 * 接口 [删除通知↗](https://yapi.ifoodme.com/project/11/interface/api/362) 的 **请求配置的类型**
 *
 * @分类 [Notices↗](https://yapi.ifoodme.com/project/11/interface/api/cat_71)
 * @标签 `Notices`
 * @请求头 `DELETE /api/notices/{notice_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiDeleteNoticesNoticeIdRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/notices/{notice_id}',
    undefined,
    'notice_id',
    string,
    false
  >
>

/**
 * 接口 [删除通知↗](https://yapi.ifoodme.com/project/11/interface/api/362) 的 **请求配置**
 *
 * @分类 [Notices↗](https://yapi.ifoodme.com/project/11/interface/api/cat_71)
 * @标签 `Notices`
 * @请求头 `DELETE /api/notices/{notice_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiDeleteNoticesNoticeIdRequestConfig: ApiDeleteNoticesNoticeIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_12,
  devUrl: devUrl_0_0_0_12,
  prodUrl: prodUrl_0_0_0_12,
  path: '/api/notices/{notice_id}',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_12,
  paramNames: ['notice_id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteNoticesNotice_id',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [删除通知↗](https://yapi.ifoodme.com/project/11/interface/api/362) 的 **请求函数**
 *
 * @分类 [Notices↗](https://yapi.ifoodme.com/project/11/interface/api/cat_71)
 * @标签 `Notices`
 * @请求头 `DELETE /api/notices/{notice_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiDeleteNoticesNotice_id = /*#__PURE__*/ (
  requestData: ApiDeleteNoticesNoticeIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiDeleteNoticesNoticeIdResponse>(prepare(apiDeleteNoticesNoticeIdRequestConfig, requestData), ...args)
}

apiDeleteNoticesNotice_id.requestConfig = apiDeleteNoticesNoticeIdRequestConfig

/* prettier-ignore-end */
