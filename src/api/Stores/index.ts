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

const mockUrl_0_0_0_15 = 'https://yapi.ifoodme.com/mock/11' as any
const devUrl_0_0_0_15 = '' as any
const prodUrl_0_0_0_15 = 'https://www.ifoodme.com' as any
const dataKey_0_0_0_15 = undefined as any

/**
 * 接口 [更新商铺↗](https://yapi.ifoodme.com/project/11/interface/api/422) 的 **请求类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `PUT /api/stores`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPutStoresRequest {}

/**
 * 接口 [更新商铺↗](https://yapi.ifoodme.com/project/11/interface/api/422) 的 **返回类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `PUT /api/stores`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPutStoresResponse {}

/**
 * 接口 [更新商铺↗](https://yapi.ifoodme.com/project/11/interface/api/422) 的 **请求配置的类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `PUT /api/stores`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiPutStoresRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/stores',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [更新商铺↗](https://yapi.ifoodme.com/project/11/interface/api/422) 的 **请求配置**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `PUT /api/stores`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiPutStoresRequestConfig: ApiPutStoresRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_15,
  devUrl: devUrl_0_0_0_15,
  prodUrl: prodUrl_0_0_0_15,
  path: '/api/stores',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_15,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutStores',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [更新商铺↗](https://yapi.ifoodme.com/project/11/interface/api/422) 的 **请求函数**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `PUT /api/stores`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiPutStores = /*#__PURE__*/ (requestData?: ApiPutStoresRequest, ...args: UserRequestRestArgs) => {
  return request<ApiPutStoresResponse>(prepare(apiPutStoresRequestConfig, requestData), ...args)
}

apiPutStores.requestConfig = apiPutStoresRequestConfig

/**
 * 接口 [新建商铺↗](https://yapi.ifoodme.com/project/11/interface/api/428) 的 **请求类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `POST /api/stores`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostStoresRequest {}

/**
 * 接口 [新建商铺↗](https://yapi.ifoodme.com/project/11/interface/api/428) 的 **返回类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `POST /api/stores`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostStoresResponse {}

/**
 * 接口 [新建商铺↗](https://yapi.ifoodme.com/project/11/interface/api/428) 的 **请求配置的类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `POST /api/stores`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiPostStoresRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/stores',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [新建商铺↗](https://yapi.ifoodme.com/project/11/interface/api/428) 的 **请求配置**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `POST /api/stores`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiPostStoresRequestConfig: ApiPostStoresRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_15,
  devUrl: devUrl_0_0_0_15,
  prodUrl: prodUrl_0_0_0_15,
  path: '/api/stores',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_15,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostStores',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [新建商铺↗](https://yapi.ifoodme.com/project/11/interface/api/428) 的 **请求函数**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `POST /api/stores`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiPostStores = /*#__PURE__*/ (requestData?: ApiPostStoresRequest, ...args: UserRequestRestArgs) => {
  return request<ApiPostStoresResponse>(prepare(apiPostStoresRequestConfig, requestData), ...args)
}

apiPostStores.requestConfig = apiPostStoresRequestConfig

/**
 * 接口 [获取商铺列表↗](https://yapi.ifoodme.com/project/11/interface/api/434) 的 **请求类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `POST /api/stores/list`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostStoresListRequest {}

/**
 * 接口 [获取商铺列表↗](https://yapi.ifoodme.com/project/11/interface/api/434) 的 **返回类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `POST /api/stores/list`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostStoresListResponse {}

/**
 * 接口 [获取商铺列表↗](https://yapi.ifoodme.com/project/11/interface/api/434) 的 **请求配置的类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `POST /api/stores/list`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiPostStoresListRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/stores/list',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [获取商铺列表↗](https://yapi.ifoodme.com/project/11/interface/api/434) 的 **请求配置**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `POST /api/stores/list`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiPostStoresListRequestConfig: ApiPostStoresListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_15,
  devUrl: devUrl_0_0_0_15,
  prodUrl: prodUrl_0_0_0_15,
  path: '/api/stores/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_15,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostStoresList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取商铺列表↗](https://yapi.ifoodme.com/project/11/interface/api/434) 的 **请求函数**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `POST /api/stores/list`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiPostStoresList = /*#__PURE__*/ (
  requestData?: ApiPostStoresListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostStoresListResponse>(prepare(apiPostStoresListRequestConfig, requestData), ...args)
}

apiPostStoresList.requestConfig = apiPostStoresListRequestConfig

/**
 * 接口 [获取商铺的标签↗](https://yapi.ifoodme.com/project/11/interface/api/440) 的 **请求类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `GET /api/stores/{storeID}/tags`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiGetStoresStoreIdTagsRequest {
  /**
   * 商铺ID
   */
  storeID: string
}

/**
 * 接口 [获取商铺的标签↗](https://yapi.ifoodme.com/project/11/interface/api/440) 的 **返回类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `GET /api/stores/{storeID}/tags`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiGetStoresStoreIdTagsResponse {}

/**
 * 接口 [获取商铺的标签↗](https://yapi.ifoodme.com/project/11/interface/api/440) 的 **请求配置的类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `GET /api/stores/{storeID}/tags`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiGetStoresStoreIdTagsRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/stores/{storeID}/tags',
    undefined,
    'storeID',
    string,
    false
  >
>

/**
 * 接口 [获取商铺的标签↗](https://yapi.ifoodme.com/project/11/interface/api/440) 的 **请求配置**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `GET /api/stores/{storeID}/tags`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiGetStoresStoreIdTagsRequestConfig: ApiGetStoresStoreIdTagsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_15,
  devUrl: devUrl_0_0_0_15,
  prodUrl: prodUrl_0_0_0_15,
  path: '/api/stores/{storeID}/tags',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_15,
  paramNames: ['storeID'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetStoresStoreIDTags',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取商铺的标签↗](https://yapi.ifoodme.com/project/11/interface/api/440) 的 **请求函数**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `GET /api/stores/{storeID}/tags`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiGetStoresStoreIDTags = /*#__PURE__*/ (
  requestData: ApiGetStoresStoreIdTagsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiGetStoresStoreIdTagsResponse>(prepare(apiGetStoresStoreIdTagsRequestConfig, requestData), ...args)
}

apiGetStoresStoreIDTags.requestConfig = apiGetStoresStoreIdTagsRequestConfig

/**
 * 接口 [为商铺添加标签↗](https://yapi.ifoodme.com/project/11/interface/api/446) 的 **请求类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `POST /api/stores/{storeID}/tags`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostStoresStoreIdTagsRequest {
  /**
   * 商铺ID
   */
  storeID: string
  [k: string]: unknown
}

/**
 * 接口 [为商铺添加标签↗](https://yapi.ifoodme.com/project/11/interface/api/446) 的 **返回类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `POST /api/stores/{storeID}/tags`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostStoresStoreIdTagsResponse {}

/**
 * 接口 [为商铺添加标签↗](https://yapi.ifoodme.com/project/11/interface/api/446) 的 **请求配置的类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `POST /api/stores/{storeID}/tags`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiPostStoresStoreIdTagsRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/stores/{storeID}/tags',
    undefined,
    'storeID',
    string,
    false
  >
>

/**
 * 接口 [为商铺添加标签↗](https://yapi.ifoodme.com/project/11/interface/api/446) 的 **请求配置**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `POST /api/stores/{storeID}/tags`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiPostStoresStoreIdTagsRequestConfig: ApiPostStoresStoreIdTagsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_15,
  devUrl: devUrl_0_0_0_15,
  prodUrl: prodUrl_0_0_0_15,
  path: '/api/stores/{storeID}/tags',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_15,
  paramNames: ['storeID'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostStoresStoreIDTags',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [为商铺添加标签↗](https://yapi.ifoodme.com/project/11/interface/api/446) 的 **请求函数**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `POST /api/stores/{storeID}/tags`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiPostStoresStoreIDTags = /*#__PURE__*/ (
  requestData: ApiPostStoresStoreIdTagsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostStoresStoreIdTagsResponse>(prepare(apiPostStoresStoreIdTagsRequestConfig, requestData), ...args)
}

apiPostStoresStoreIDTags.requestConfig = apiPostStoresStoreIdTagsRequestConfig

/**
 * 接口 [从商铺移除标签↗](https://yapi.ifoodme.com/project/11/interface/api/452) 的 **请求类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `DELETE /api/stores/{storeID}/tags/{tagID}`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiDeleteStoresStoreIdTagsTagIdRequest {
  /**
   * 商铺ID
   */
  storeID: string
  /**
   * 标签ID
   */
  tagID: string
}

/**
 * 接口 [从商铺移除标签↗](https://yapi.ifoodme.com/project/11/interface/api/452) 的 **返回类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `DELETE /api/stores/{storeID}/tags/{tagID}`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiDeleteStoresStoreIdTagsTagIdResponse {}

/**
 * 接口 [从商铺移除标签↗](https://yapi.ifoodme.com/project/11/interface/api/452) 的 **请求配置的类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `DELETE /api/stores/{storeID}/tags/{tagID}`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiDeleteStoresStoreIdTagsTagIdRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/stores/{storeID}/tags/{tagID}',
    undefined,
    'storeID' | 'tagID',
    string,
    false
  >
>

/**
 * 接口 [从商铺移除标签↗](https://yapi.ifoodme.com/project/11/interface/api/452) 的 **请求配置**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `DELETE /api/stores/{storeID}/tags/{tagID}`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiDeleteStoresStoreIdTagsTagIdRequestConfig: ApiDeleteStoresStoreIdTagsTagIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_15,
  devUrl: devUrl_0_0_0_15,
  prodUrl: prodUrl_0_0_0_15,
  path: '/api/stores/{storeID}/tags/{tagID}',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_15,
  paramNames: ['storeID', 'tagID'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteStoresStoreIDTagsTagID',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [从商铺移除标签↗](https://yapi.ifoodme.com/project/11/interface/api/452) 的 **请求函数**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `DELETE /api/stores/{storeID}/tags/{tagID}`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiDeleteStoresStoreIDTagsTagID = /*#__PURE__*/ (
  requestData: ApiDeleteStoresStoreIdTagsTagIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiDeleteStoresStoreIdTagsTagIdResponse>(
    prepare(apiDeleteStoresStoreIdTagsTagIdRequestConfig, requestData),
    ...args,
  )
}

apiDeleteStoresStoreIDTagsTagID.requestConfig = apiDeleteStoresStoreIdTagsTagIdRequestConfig

/**
 * 接口 [获取商铺信息↗](https://yapi.ifoodme.com/project/11/interface/api/458) 的 **请求类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `GET /api/stores/{store_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiGetStoresStoreIdRequest {
  /**
   * 商铺ID
   */
  store_id: string
}

/**
 * 接口 [获取商铺信息↗](https://yapi.ifoodme.com/project/11/interface/api/458) 的 **返回类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `GET /api/stores/{store_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiGetStoresStoreIdResponse {}

/**
 * 接口 [获取商铺信息↗](https://yapi.ifoodme.com/project/11/interface/api/458) 的 **请求配置的类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `GET /api/stores/{store_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiGetStoresStoreIdRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/stores/{store_id}',
    undefined,
    'store_id',
    string,
    false
  >
>

/**
 * 接口 [获取商铺信息↗](https://yapi.ifoodme.com/project/11/interface/api/458) 的 **请求配置**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `GET /api/stores/{store_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiGetStoresStoreIdRequestConfig: ApiGetStoresStoreIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_15,
  devUrl: devUrl_0_0_0_15,
  prodUrl: prodUrl_0_0_0_15,
  path: '/api/stores/{store_id}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_15,
  paramNames: ['store_id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetStoresStore_id',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取商铺信息↗](https://yapi.ifoodme.com/project/11/interface/api/458) 的 **请求函数**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `GET /api/stores/{store_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiGetStoresStore_id = /*#__PURE__*/ (
  requestData: ApiGetStoresStoreIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiGetStoresStoreIdResponse>(prepare(apiGetStoresStoreIdRequestConfig, requestData), ...args)
}

apiGetStoresStore_id.requestConfig = apiGetStoresStoreIdRequestConfig

/**
 * 接口 [删除商铺↗](https://yapi.ifoodme.com/project/11/interface/api/464) 的 **请求类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `DELETE /api/stores/{store_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiDeleteStoresStoreIdRequest {
  /**
   * 商铺ID
   */
  store_id: string
}

/**
 * 接口 [删除商铺↗](https://yapi.ifoodme.com/project/11/interface/api/464) 的 **返回类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `DELETE /api/stores/{store_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiDeleteStoresStoreIdResponse {}

/**
 * 接口 [删除商铺↗](https://yapi.ifoodme.com/project/11/interface/api/464) 的 **请求配置的类型**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `DELETE /api/stores/{store_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiDeleteStoresStoreIdRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/stores/{store_id}',
    undefined,
    'store_id',
    string,
    false
  >
>

/**
 * 接口 [删除商铺↗](https://yapi.ifoodme.com/project/11/interface/api/464) 的 **请求配置**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `DELETE /api/stores/{store_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiDeleteStoresStoreIdRequestConfig: ApiDeleteStoresStoreIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_15,
  devUrl: devUrl_0_0_0_15,
  prodUrl: prodUrl_0_0_0_15,
  path: '/api/stores/{store_id}',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_15,
  paramNames: ['store_id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteStoresStore_id',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [删除商铺↗](https://yapi.ifoodme.com/project/11/interface/api/464) 的 **请求函数**
 *
 * @分类 [Stores↗](https://yapi.ifoodme.com/project/11/interface/api/cat_89)
 * @标签 `Stores`
 * @请求头 `DELETE /api/stores/{store_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiDeleteStoresStore_id = /*#__PURE__*/ (
  requestData: ApiDeleteStoresStoreIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiDeleteStoresStoreIdResponse>(prepare(apiDeleteStoresStoreIdRequestConfig, requestData), ...args)
}

apiDeleteStoresStore_id.requestConfig = apiDeleteStoresStoreIdRequestConfig

/* prettier-ignore-end */
