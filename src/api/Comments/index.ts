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

const mockUrl_0_0_0_6 = 'https://yapi.ifoodme.com/mock/11' as any
const devUrl_0_0_0_6 = '' as any
const prodUrl_0_0_0_6 = 'https://www.ifoodme.com' as any
const dataKey_0_0_0_6 = undefined as any

/**
 * 接口 [更新评论↗](https://yapi.ifoodme.com/project/11/interface/api/134) 的 **请求类型**
 *
 * @分类 [Comments↗](https://yapi.ifoodme.com/project/11/interface/api/cat_35)
 * @标签 `Comments`
 * @请求头 `PUT /api/comments`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPutCommentsRequest {
  comment_id: number
  comment_text?: string
  is_published?: boolean
  reply_to_comment_id?: number
}

/**
 * 接口 [更新评论↗](https://yapi.ifoodme.com/project/11/interface/api/134) 的 **返回类型**
 *
 * @分类 [Comments↗](https://yapi.ifoodme.com/project/11/interface/api/cat_35)
 * @标签 `Comments`
 * @请求头 `PUT /api/comments`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPutCommentsResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 错误码
   */
  errCode?: string
  /**
   * 错误信息
   */
  errMessage?: string
  /**
   * 请求是否成功
   */
  success?: boolean
}

/**
 * 接口 [更新评论↗](https://yapi.ifoodme.com/project/11/interface/api/134) 的 **请求配置的类型**
 *
 * @分类 [Comments↗](https://yapi.ifoodme.com/project/11/interface/api/cat_35)
 * @标签 `Comments`
 * @请求头 `PUT /api/comments`
 * @更新时间 `2025-08-30 13:36:00`
 */
type ApiPutCommentsRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/comments',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [更新评论↗](https://yapi.ifoodme.com/project/11/interface/api/134) 的 **请求配置**
 *
 * @分类 [Comments↗](https://yapi.ifoodme.com/project/11/interface/api/cat_35)
 * @标签 `Comments`
 * @请求头 `PUT /api/comments`
 * @更新时间 `2025-08-30 13:36:00`
 */
const apiPutCommentsRequestConfig: ApiPutCommentsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/api/comments',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutComments',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [更新评论↗](https://yapi.ifoodme.com/project/11/interface/api/134) 的 **请求函数**
 *
 * @分类 [Comments↗](https://yapi.ifoodme.com/project/11/interface/api/cat_35)
 * @标签 `Comments`
 * @请求头 `PUT /api/comments`
 * @更新时间 `2025-08-30 13:36:00`
 */
export const apiPutComments = /*#__PURE__*/ (requestData: ApiPutCommentsRequest, ...args: UserRequestRestArgs) => {
  return request<ApiPutCommentsResponse>(prepare(apiPutCommentsRequestConfig, requestData), ...args)
}

apiPutComments.requestConfig = apiPutCommentsRequestConfig

/**
 * 接口 [新建评论↗](https://yapi.ifoodme.com/project/11/interface/api/140) 的 **请求类型**
 *
 * @分类 [Comments↗](https://yapi.ifoodme.com/project/11/interface/api/cat_35)
 * @标签 `Comments`
 * @请求头 `POST /api/comments`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPostCommentsRequest {
  article_id: number
  comment_text: string
  is_published: boolean
  reply_to_comment_id?: number
  user_id: number
}

/**
 * 接口 [新建评论↗](https://yapi.ifoodme.com/project/11/interface/api/140) 的 **返回类型**
 *
 * @分类 [Comments↗](https://yapi.ifoodme.com/project/11/interface/api/cat_35)
 * @标签 `Comments`
 * @请求头 `POST /api/comments`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPostCommentsResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 数据
   */
  data?: {
    article_id?: number
    comment_id?: number
    comment_text?: string
    created_at?: string
    is_published?: boolean
    reply_to_comment_id?: number
    updated_at?: string
    user_id?: number
  }
  /**
   * 错误码
   */
  errCode?: string
  /**
   * 错误信息
   */
  errMessage?: string
  /**
   * 请求是否成功
   */
  success?: boolean
}

/**
 * 接口 [新建评论↗](https://yapi.ifoodme.com/project/11/interface/api/140) 的 **请求配置的类型**
 *
 * @分类 [Comments↗](https://yapi.ifoodme.com/project/11/interface/api/cat_35)
 * @标签 `Comments`
 * @请求头 `POST /api/comments`
 * @更新时间 `2025-08-30 13:36:00`
 */
type ApiPostCommentsRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/comments',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [新建评论↗](https://yapi.ifoodme.com/project/11/interface/api/140) 的 **请求配置**
 *
 * @分类 [Comments↗](https://yapi.ifoodme.com/project/11/interface/api/cat_35)
 * @标签 `Comments`
 * @请求头 `POST /api/comments`
 * @更新时间 `2025-08-30 13:36:00`
 */
const apiPostCommentsRequestConfig: ApiPostCommentsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/api/comments',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostComments',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [新建评论↗](https://yapi.ifoodme.com/project/11/interface/api/140) 的 **请求函数**
 *
 * @分类 [Comments↗](https://yapi.ifoodme.com/project/11/interface/api/cat_35)
 * @标签 `Comments`
 * @请求头 `POST /api/comments`
 * @更新时间 `2025-08-30 13:36:00`
 */
export const apiPostComments = /*#__PURE__*/ (requestData: ApiPostCommentsRequest, ...args: UserRequestRestArgs) => {
  return request<ApiPostCommentsResponse>(prepare(apiPostCommentsRequestConfig, requestData), ...args)
}

apiPostComments.requestConfig = apiPostCommentsRequestConfig

/**
 * 接口 [获取评论列表↗](https://yapi.ifoodme.com/project/11/interface/api/146) 的 **请求类型**
 *
 * @分类 [Comments↗](https://yapi.ifoodme.com/project/11/interface/api/cat_35)
 * @标签 `Comments`
 * @请求头 `POST /api/comments/list`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPostCommentsListRequest {
  keyword?: string
  page: number
  pageSize: number
}

/**
 * 接口 [获取评论列表↗](https://yapi.ifoodme.com/project/11/interface/api/146) 的 **返回类型**
 *
 * @分类 [Comments↗](https://yapi.ifoodme.com/project/11/interface/api/cat_35)
 * @标签 `Comments`
 * @请求头 `POST /api/comments/list`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiPostCommentsListResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 列表
   */
  data?: {
    article_id?: number
    comment_id?: number
    comment_text?: string
    created_at?: string
    is_published?: boolean
    reply_to_comment_id?: number
    updated_at?: string
    user_id?: number
  }[]
  /**
   * 错误码
   */
  errCode?: string
  /**
   * 错误信息
   */
  errMessage?: string
  /**
   * 页码
   */
  page?: number
  /**
   * 每页条数
   */
  pageSize?: number
  /**
   * 请求是否成功
   */
  success?: boolean
  /**
   * 总条数
   */
  total?: number
}

/**
 * 接口 [获取评论列表↗](https://yapi.ifoodme.com/project/11/interface/api/146) 的 **请求配置的类型**
 *
 * @分类 [Comments↗](https://yapi.ifoodme.com/project/11/interface/api/cat_35)
 * @标签 `Comments`
 * @请求头 `POST /api/comments/list`
 * @更新时间 `2025-08-30 13:36:00`
 */
type ApiPostCommentsListRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/comments/list',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [获取评论列表↗](https://yapi.ifoodme.com/project/11/interface/api/146) 的 **请求配置**
 *
 * @分类 [Comments↗](https://yapi.ifoodme.com/project/11/interface/api/cat_35)
 * @标签 `Comments`
 * @请求头 `POST /api/comments/list`
 * @更新时间 `2025-08-30 13:36:00`
 */
const apiPostCommentsListRequestConfig: ApiPostCommentsListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/api/comments/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostCommentsList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取评论列表↗](https://yapi.ifoodme.com/project/11/interface/api/146) 的 **请求函数**
 *
 * @分类 [Comments↗](https://yapi.ifoodme.com/project/11/interface/api/cat_35)
 * @标签 `Comments`
 * @请求头 `POST /api/comments/list`
 * @更新时间 `2025-08-30 13:36:00`
 */
export const apiPostCommentsList = /*#__PURE__*/ (
  requestData: ApiPostCommentsListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostCommentsListResponse>(prepare(apiPostCommentsListRequestConfig, requestData), ...args)
}

apiPostCommentsList.requestConfig = apiPostCommentsListRequestConfig

/**
 * 接口 [获取单个评论↗](https://yapi.ifoodme.com/project/11/interface/api/152) 的 **请求类型**
 *
 * @分类 [Comments↗](https://yapi.ifoodme.com/project/11/interface/api/cat_35)
 * @标签 `Comments`
 * @请求头 `GET /api/comments/{comment_id}`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiGetCommentsCommentIdRequest {
  /**
   * 评论ID
   */
  comment_id: string
}

/**
 * 接口 [获取单个评论↗](https://yapi.ifoodme.com/project/11/interface/api/152) 的 **返回类型**
 *
 * @分类 [Comments↗](https://yapi.ifoodme.com/project/11/interface/api/cat_35)
 * @标签 `Comments`
 * @请求头 `GET /api/comments/{comment_id}`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiGetCommentsCommentIdResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 数据
   */
  data?: {
    article_id?: number
    comment_id?: number
    comment_text?: string
    created_at?: string
    is_published?: boolean
    reply_to_comment_id?: number
    updated_at?: string
    user_id?: number
  }
  /**
   * 错误码
   */
  errCode?: string
  /**
   * 错误信息
   */
  errMessage?: string
  /**
   * 请求是否成功
   */
  success?: boolean
}

/**
 * 接口 [获取单个评论↗](https://yapi.ifoodme.com/project/11/interface/api/152) 的 **请求配置的类型**
 *
 * @分类 [Comments↗](https://yapi.ifoodme.com/project/11/interface/api/cat_35)
 * @标签 `Comments`
 * @请求头 `GET /api/comments/{comment_id}`
 * @更新时间 `2025-08-30 13:36:00`
 */
type ApiGetCommentsCommentIdRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/comments/{comment_id}',
    undefined,
    'comment_id',
    string,
    false
  >
>

/**
 * 接口 [获取单个评论↗](https://yapi.ifoodme.com/project/11/interface/api/152) 的 **请求配置**
 *
 * @分类 [Comments↗](https://yapi.ifoodme.com/project/11/interface/api/cat_35)
 * @标签 `Comments`
 * @请求头 `GET /api/comments/{comment_id}`
 * @更新时间 `2025-08-30 13:36:00`
 */
const apiGetCommentsCommentIdRequestConfig: ApiGetCommentsCommentIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/api/comments/{comment_id}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
  paramNames: ['comment_id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetCommentsComment_id',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取单个评论↗](https://yapi.ifoodme.com/project/11/interface/api/152) 的 **请求函数**
 *
 * @分类 [Comments↗](https://yapi.ifoodme.com/project/11/interface/api/cat_35)
 * @标签 `Comments`
 * @请求头 `GET /api/comments/{comment_id}`
 * @更新时间 `2025-08-30 13:36:00`
 */
export const apiGetCommentsComment_id = /*#__PURE__*/ (
  requestData: ApiGetCommentsCommentIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiGetCommentsCommentIdResponse>(prepare(apiGetCommentsCommentIdRequestConfig, requestData), ...args)
}

apiGetCommentsComment_id.requestConfig = apiGetCommentsCommentIdRequestConfig

/**
 * 接口 [删除评论↗](https://yapi.ifoodme.com/project/11/interface/api/158) 的 **请求类型**
 *
 * @分类 [Comments↗](https://yapi.ifoodme.com/project/11/interface/api/cat_35)
 * @标签 `Comments`
 * @请求头 `DELETE /api/comments/{comment_id}`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiDeleteCommentsCommentIdRequest {
  /**
   * 评论ID
   */
  comment_id: string
}

/**
 * 接口 [删除评论↗](https://yapi.ifoodme.com/project/11/interface/api/158) 的 **返回类型**
 *
 * @分类 [Comments↗](https://yapi.ifoodme.com/project/11/interface/api/cat_35)
 * @标签 `Comments`
 * @请求头 `DELETE /api/comments/{comment_id}`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiDeleteCommentsCommentIdResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 错误码
   */
  errCode?: string
  /**
   * 错误信息
   */
  errMessage?: string
  /**
   * 请求是否成功
   */
  success?: boolean
}

/**
 * 接口 [删除评论↗](https://yapi.ifoodme.com/project/11/interface/api/158) 的 **请求配置的类型**
 *
 * @分类 [Comments↗](https://yapi.ifoodme.com/project/11/interface/api/cat_35)
 * @标签 `Comments`
 * @请求头 `DELETE /api/comments/{comment_id}`
 * @更新时间 `2025-08-30 13:36:00`
 */
type ApiDeleteCommentsCommentIdRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/comments/{comment_id}',
    undefined,
    'comment_id',
    string,
    false
  >
>

/**
 * 接口 [删除评论↗](https://yapi.ifoodme.com/project/11/interface/api/158) 的 **请求配置**
 *
 * @分类 [Comments↗](https://yapi.ifoodme.com/project/11/interface/api/cat_35)
 * @标签 `Comments`
 * @请求头 `DELETE /api/comments/{comment_id}`
 * @更新时间 `2025-08-30 13:36:00`
 */
const apiDeleteCommentsCommentIdRequestConfig: ApiDeleteCommentsCommentIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_6,
  devUrl: devUrl_0_0_0_6,
  prodUrl: prodUrl_0_0_0_6,
  path: '/api/comments/{comment_id}',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_6,
  paramNames: ['comment_id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteCommentsComment_id',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [删除评论↗](https://yapi.ifoodme.com/project/11/interface/api/158) 的 **请求函数**
 *
 * @分类 [Comments↗](https://yapi.ifoodme.com/project/11/interface/api/cat_35)
 * @标签 `Comments`
 * @请求头 `DELETE /api/comments/{comment_id}`
 * @更新时间 `2025-08-30 13:36:00`
 */
export const apiDeleteCommentsComment_id = /*#__PURE__*/ (
  requestData: ApiDeleteCommentsCommentIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiDeleteCommentsCommentIdResponse>(
    prepare(apiDeleteCommentsCommentIdRequestConfig, requestData),
    ...args,
  )
}

apiDeleteCommentsComment_id.requestConfig = apiDeleteCommentsCommentIdRequestConfig

/* prettier-ignore-end */
