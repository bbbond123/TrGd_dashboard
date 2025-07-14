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

const mockUrl_0_0_0_3 = 'https://yapi.ifoodme.com/mock/11' as any
const devUrl_0_0_0_3 = '' as any
const prodUrl_0_0_0_3 = 'https://www.ifoodme.com' as any
const dataKey_0_0_0_3 = undefined as any

/**
 * 接口 [更新文章↗](https://yapi.ifoodme.com/project/11/interface/api/14) 的 **请求类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `PUT /api/articles`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPutArticlesRequest {}

/**
 * 接口 [更新文章↗](https://yapi.ifoodme.com/project/11/interface/api/14) 的 **返回类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `PUT /api/articles`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPutArticlesResponse {}

/**
 * 接口 [更新文章↗](https://yapi.ifoodme.com/project/11/interface/api/14) 的 **请求配置的类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `PUT /api/articles`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiPutArticlesRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/articles',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [更新文章↗](https://yapi.ifoodme.com/project/11/interface/api/14) 的 **请求配置**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `PUT /api/articles`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiPutArticlesRequestConfig: ApiPutArticlesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/api/articles',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutArticles',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [更新文章↗](https://yapi.ifoodme.com/project/11/interface/api/14) 的 **请求函数**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `PUT /api/articles`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiPutArticles = /*#__PURE__*/ (requestData?: ApiPutArticlesRequest, ...args: UserRequestRestArgs) => {
  return request<ApiPutArticlesResponse>(prepare(apiPutArticlesRequestConfig, requestData), ...args)
}

apiPutArticles.requestConfig = apiPutArticlesRequestConfig

/**
 * 接口 [新建文章（支持图片上传）↗](https://yapi.ifoodme.com/project/11/interface/api/20) 的 **请求类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostArticlesRequest {}

/**
 * 接口 [新建文章（支持图片上传）↗](https://yapi.ifoodme.com/project/11/interface/api/20) 的 **返回类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostArticlesResponse {}

/**
 * 接口 [新建文章（支持图片上传）↗](https://yapi.ifoodme.com/project/11/interface/api/20) 的 **请求配置的类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiPostArticlesRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/articles',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [新建文章（支持图片上传）↗](https://yapi.ifoodme.com/project/11/interface/api/20) 的 **请求配置**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiPostArticlesRequestConfig: ApiPostArticlesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/api/articles',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostArticles',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [新建文章（支持图片上传）↗](https://yapi.ifoodme.com/project/11/interface/api/20) 的 **请求函数**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiPostArticles = /*#__PURE__*/ (requestData?: ApiPostArticlesRequest, ...args: UserRequestRestArgs) => {
  return request<ApiPostArticlesResponse>(prepare(apiPostArticlesRequestConfig, requestData), ...args)
}

apiPostArticles.requestConfig = apiPostArticlesRequestConfig

/**
 * 接口 [获取文章列表↗](https://yapi.ifoodme.com/project/11/interface/api/26) 的 **请求类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/list`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostArticlesListRequest {}

/**
 * 接口 [获取文章列表↗](https://yapi.ifoodme.com/project/11/interface/api/26) 的 **返回类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/list`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostArticlesListResponse {}

/**
 * 接口 [获取文章列表↗](https://yapi.ifoodme.com/project/11/interface/api/26) 的 **请求配置的类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/list`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiPostArticlesListRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/articles/list',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [获取文章列表↗](https://yapi.ifoodme.com/project/11/interface/api/26) 的 **请求配置**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/list`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiPostArticlesListRequestConfig: ApiPostArticlesListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/api/articles/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostArticlesList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取文章列表↗](https://yapi.ifoodme.com/project/11/interface/api/26) 的 **请求函数**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/list`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiPostArticlesList = /*#__PURE__*/ (
  requestData?: ApiPostArticlesListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostArticlesListResponse>(prepare(apiPostArticlesListRequestConfig, requestData), ...args)
}

apiPostArticlesList.requestConfig = apiPostArticlesListRequestConfig

/**
 * 接口 [搜索附近文章↗](https://yapi.ifoodme.com/project/11/interface/api/32) 的 **请求类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/nearby`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostArticlesNearbyRequest {}

/**
 * 接口 [搜索附近文章↗](https://yapi.ifoodme.com/project/11/interface/api/32) 的 **返回类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/nearby`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostArticlesNearbyResponse {}

/**
 * 接口 [搜索附近文章↗](https://yapi.ifoodme.com/project/11/interface/api/32) 的 **请求配置的类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/nearby`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiPostArticlesNearbyRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/articles/nearby',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [搜索附近文章↗](https://yapi.ifoodme.com/project/11/interface/api/32) 的 **请求配置**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/nearby`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiPostArticlesNearbyRequestConfig: ApiPostArticlesNearbyRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/api/articles/nearby',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostArticlesNearby',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [搜索附近文章↗](https://yapi.ifoodme.com/project/11/interface/api/32) 的 **请求函数**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/nearby`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiPostArticlesNearby = /*#__PURE__*/ (
  requestData?: ApiPostArticlesNearbyRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostArticlesNearbyResponse>(prepare(apiPostArticlesNearbyRequestConfig, requestData), ...args)
}

apiPostArticlesNearby.requestConfig = apiPostArticlesNearbyRequestConfig

/**
 * 接口 [获取文章统计信息↗](https://yapi.ifoodme.com/project/11/interface/api/38) 的 **请求类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/stats`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostArticlesStatsRequest {}

/**
 * 接口 [获取文章统计信息↗](https://yapi.ifoodme.com/project/11/interface/api/38) 的 **返回类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/stats`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostArticlesStatsResponse {}

/**
 * 接口 [获取文章统计信息↗](https://yapi.ifoodme.com/project/11/interface/api/38) 的 **请求配置的类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/stats`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiPostArticlesStatsRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/articles/stats',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [获取文章统计信息↗](https://yapi.ifoodme.com/project/11/interface/api/38) 的 **请求配置**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/stats`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiPostArticlesStatsRequestConfig: ApiPostArticlesStatsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/api/articles/stats',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostArticlesStats',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取文章统计信息↗](https://yapi.ifoodme.com/project/11/interface/api/38) 的 **请求函数**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/stats`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiPostArticlesStats = /*#__PURE__*/ (
  requestData?: ApiPostArticlesStatsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostArticlesStatsResponse>(prepare(apiPostArticlesStatsRequestConfig, requestData), ...args)
}

apiPostArticlesStats.requestConfig = apiPostArticlesStatsRequestConfig

/**
 * 接口 [新建文章（支持图片上传）↗](https://yapi.ifoodme.com/project/11/interface/api/44) 的 **请求类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/with-image`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostArticlesWithImageRequest {}

/**
 * 接口 [新建文章（支持图片上传）↗](https://yapi.ifoodme.com/project/11/interface/api/44) 的 **返回类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/with-image`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostArticlesWithImageResponse {}

/**
 * 接口 [新建文章（支持图片上传）↗](https://yapi.ifoodme.com/project/11/interface/api/44) 的 **请求配置的类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/with-image`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiPostArticlesWithImageRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/articles/with-image',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [新建文章（支持图片上传）↗](https://yapi.ifoodme.com/project/11/interface/api/44) 的 **请求配置**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/with-image`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiPostArticlesWithImageRequestConfig: ApiPostArticlesWithImageRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/api/articles/with-image',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostArticlesWithImage',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [新建文章（支持图片上传）↗](https://yapi.ifoodme.com/project/11/interface/api/44) 的 **请求函数**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/with-image`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiPostArticlesWithImage = /*#__PURE__*/ (
  requestData?: ApiPostArticlesWithImageRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostArticlesWithImageResponse>(prepare(apiPostArticlesWithImageRequestConfig, requestData), ...args)
}

apiPostArticlesWithImage.requestConfig = apiPostArticlesWithImageRequestConfig

/**
 * 接口 [获取文章信息↗](https://yapi.ifoodme.com/project/11/interface/api/50) 的 **请求类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `GET /api/articles/{article_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiGetArticlesArticleIdRequest {
  /**
   * 文章ID
   */
  article_id: string
}

/**
 * 接口 [获取文章信息↗](https://yapi.ifoodme.com/project/11/interface/api/50) 的 **返回类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `GET /api/articles/{article_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiGetArticlesArticleIdResponse {}

/**
 * 接口 [获取文章信息↗](https://yapi.ifoodme.com/project/11/interface/api/50) 的 **请求配置的类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `GET /api/articles/{article_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiGetArticlesArticleIdRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/articles/{article_id}',
    undefined,
    'article_id',
    string,
    false
  >
>

/**
 * 接口 [获取文章信息↗](https://yapi.ifoodme.com/project/11/interface/api/50) 的 **请求配置**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `GET /api/articles/{article_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiGetArticlesArticleIdRequestConfig: ApiGetArticlesArticleIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/api/articles/{article_id}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: ['article_id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetArticlesArticle_id',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取文章信息↗](https://yapi.ifoodme.com/project/11/interface/api/50) 的 **请求函数**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `GET /api/articles/{article_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiGetArticlesArticle_id = /*#__PURE__*/ (
  requestData: ApiGetArticlesArticleIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiGetArticlesArticleIdResponse>(prepare(apiGetArticlesArticleIdRequestConfig, requestData), ...args)
}

apiGetArticlesArticle_id.requestConfig = apiGetArticlesArticleIdRequestConfig

/**
 * 接口 [删除文章↗](https://yapi.ifoodme.com/project/11/interface/api/56) 的 **请求类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `DELETE /api/articles/{article_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiDeleteArticlesArticleIdRequest {
  /**
   * 文章ID
   */
  article_id: string
}

/**
 * 接口 [删除文章↗](https://yapi.ifoodme.com/project/11/interface/api/56) 的 **返回类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `DELETE /api/articles/{article_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiDeleteArticlesArticleIdResponse {}

/**
 * 接口 [删除文章↗](https://yapi.ifoodme.com/project/11/interface/api/56) 的 **请求配置的类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `DELETE /api/articles/{article_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiDeleteArticlesArticleIdRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/articles/{article_id}',
    undefined,
    'article_id',
    string,
    false
  >
>

/**
 * 接口 [删除文章↗](https://yapi.ifoodme.com/project/11/interface/api/56) 的 **请求配置**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `DELETE /api/articles/{article_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiDeleteArticlesArticleIdRequestConfig: ApiDeleteArticlesArticleIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/api/articles/{article_id}',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: ['article_id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteArticlesArticle_id',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [删除文章↗](https://yapi.ifoodme.com/project/11/interface/api/56) 的 **请求函数**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `DELETE /api/articles/{article_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiDeleteArticlesArticle_id = /*#__PURE__*/ (
  requestData: ApiDeleteArticlesArticleIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiDeleteArticlesArticleIdResponse>(
    prepare(apiDeleteArticlesArticleIdRequestConfig, requestData),
    ...args,
  )
}

apiDeleteArticlesArticle_id.requestConfig = apiDeleteArticlesArticleIdRequestConfig

/**
 * 接口 [获取文章评论↗](https://yapi.ifoodme.com/project/11/interface/api/62) 的 **请求类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `GET /api/articles/{article_id}/comments`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiGetArticlesArticleIdCommentsRequest {
  /**
   * 页码
   */
  page?: string
  /**
   * 每页数量
   */
  pageSize?: string
  /**
   * 文章ID
   */
  article_id: string
}

/**
 * 接口 [获取文章评论↗](https://yapi.ifoodme.com/project/11/interface/api/62) 的 **返回类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `GET /api/articles/{article_id}/comments`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiGetArticlesArticleIdCommentsResponse {}

/**
 * 接口 [获取文章评论↗](https://yapi.ifoodme.com/project/11/interface/api/62) 的 **请求配置的类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `GET /api/articles/{article_id}/comments`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiGetArticlesArticleIdCommentsRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/articles/{article_id}/comments',
    undefined,
    'article_id',
    'page' | 'pageSize',
    false
  >
>

/**
 * 接口 [获取文章评论↗](https://yapi.ifoodme.com/project/11/interface/api/62) 的 **请求配置**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `GET /api/articles/{article_id}/comments`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiGetArticlesArticleIdCommentsRequestConfig: ApiGetArticlesArticleIdCommentsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/api/articles/{article_id}/comments',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: ['article_id'],
  queryNames: ['page', 'pageSize'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetArticlesArticle_idComments',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取文章评论↗](https://yapi.ifoodme.com/project/11/interface/api/62) 的 **请求函数**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `GET /api/articles/{article_id}/comments`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiGetArticlesArticle_idComments = /*#__PURE__*/ (
  requestData: ApiGetArticlesArticleIdCommentsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiGetArticlesArticleIdCommentsResponse>(
    prepare(apiGetArticlesArticleIdCommentsRequestConfig, requestData),
    ...args,
  )
}

apiGetArticlesArticle_idComments.requestConfig = apiGetArticlesArticleIdCommentsRequestConfig

/**
 * 接口 [点赞文章↗](https://yapi.ifoodme.com/project/11/interface/api/68) 的 **请求类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/{article_id}/like`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostArticlesArticleIdLikeRequest {
  /**
   * 文章ID
   */
  article_id: string
}

/**
 * 接口 [点赞文章↗](https://yapi.ifoodme.com/project/11/interface/api/68) 的 **返回类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/{article_id}/like`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostArticlesArticleIdLikeResponse {}

/**
 * 接口 [点赞文章↗](https://yapi.ifoodme.com/project/11/interface/api/68) 的 **请求配置的类型**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/{article_id}/like`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiPostArticlesArticleIdLikeRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/articles/{article_id}/like',
    undefined,
    'article_id',
    string,
    false
  >
>

/**
 * 接口 [点赞文章↗](https://yapi.ifoodme.com/project/11/interface/api/68) 的 **请求配置**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/{article_id}/like`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiPostArticlesArticleIdLikeRequestConfig: ApiPostArticlesArticleIdLikeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_3,
  devUrl: devUrl_0_0_0_3,
  prodUrl: prodUrl_0_0_0_3,
  path: '/api/articles/{article_id}/like',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_3,
  paramNames: ['article_id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostArticlesArticle_idLike',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [点赞文章↗](https://yapi.ifoodme.com/project/11/interface/api/68) 的 **请求函数**
 *
 * @分类 [Articles↗](https://yapi.ifoodme.com/project/11/interface/api/cat_17)
 * @标签 `Articles`
 * @请求头 `POST /api/articles/{article_id}/like`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiPostArticlesArticle_idLike = /*#__PURE__*/ (
  requestData: ApiPostArticlesArticleIdLikeRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostArticlesArticleIdLikeResponse>(
    prepare(apiPostArticlesArticleIdLikeRequestConfig, requestData),
    ...args,
  )
}

apiPostArticlesArticle_idLike.requestConfig = apiPostArticlesArticleIdLikeRequestConfig

/* prettier-ignore-end */
