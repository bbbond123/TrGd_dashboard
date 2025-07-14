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

const mockUrl_0_0_0_10 = 'https://yapi.ifoodme.com/mock/11' as any
const devUrl_0_0_0_10 = '' as any
const prodUrl_0_0_0_10 = 'https://www.ifoodme.com' as any
const dataKey_0_0_0_10 = undefined as any

/**
 * 接口 [更新语言↗](https://yapi.ifoodme.com/project/11/interface/api/272) 的 **请求类型**
 *
 * @分类 [Languages↗](https://yapi.ifoodme.com/project/11/interface/api/cat_59)
 * @标签 `Languages`
 * @请求头 `PUT /api/languages`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPutLanguagesRequest {}

/**
 * 接口 [更新语言↗](https://yapi.ifoodme.com/project/11/interface/api/272) 的 **返回类型**
 *
 * @分类 [Languages↗](https://yapi.ifoodme.com/project/11/interface/api/cat_59)
 * @标签 `Languages`
 * @请求头 `PUT /api/languages`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPutLanguagesResponse {}

/**
 * 接口 [更新语言↗](https://yapi.ifoodme.com/project/11/interface/api/272) 的 **请求配置的类型**
 *
 * @分类 [Languages↗](https://yapi.ifoodme.com/project/11/interface/api/cat_59)
 * @标签 `Languages`
 * @请求头 `PUT /api/languages`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiPutLanguagesRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/languages',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [更新语言↗](https://yapi.ifoodme.com/project/11/interface/api/272) 的 **请求配置**
 *
 * @分类 [Languages↗](https://yapi.ifoodme.com/project/11/interface/api/cat_59)
 * @标签 `Languages`
 * @请求头 `PUT /api/languages`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiPutLanguagesRequestConfig: ApiPutLanguagesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_10,
  devUrl: devUrl_0_0_0_10,
  prodUrl: prodUrl_0_0_0_10,
  path: '/api/languages',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_10,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutLanguages',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [更新语言↗](https://yapi.ifoodme.com/project/11/interface/api/272) 的 **请求函数**
 *
 * @分类 [Languages↗](https://yapi.ifoodme.com/project/11/interface/api/cat_59)
 * @标签 `Languages`
 * @请求头 `PUT /api/languages`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiPutLanguages = /*#__PURE__*/ (requestData?: ApiPutLanguagesRequest, ...args: UserRequestRestArgs) => {
  return request<ApiPutLanguagesResponse>(prepare(apiPutLanguagesRequestConfig, requestData), ...args)
}

apiPutLanguages.requestConfig = apiPutLanguagesRequestConfig

/**
 * 接口 [创建语言↗](https://yapi.ifoodme.com/project/11/interface/api/278) 的 **请求类型**
 *
 * @分类 [Languages↗](https://yapi.ifoodme.com/project/11/interface/api/cat_59)
 * @标签 `Languages`
 * @请求头 `POST /api/languages`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostLanguagesRequest {}

/**
 * 接口 [创建语言↗](https://yapi.ifoodme.com/project/11/interface/api/278) 的 **返回类型**
 *
 * @分类 [Languages↗](https://yapi.ifoodme.com/project/11/interface/api/cat_59)
 * @标签 `Languages`
 * @请求头 `POST /api/languages`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostLanguagesResponse {}

/**
 * 接口 [创建语言↗](https://yapi.ifoodme.com/project/11/interface/api/278) 的 **请求配置的类型**
 *
 * @分类 [Languages↗](https://yapi.ifoodme.com/project/11/interface/api/cat_59)
 * @标签 `Languages`
 * @请求头 `POST /api/languages`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiPostLanguagesRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/languages',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [创建语言↗](https://yapi.ifoodme.com/project/11/interface/api/278) 的 **请求配置**
 *
 * @分类 [Languages↗](https://yapi.ifoodme.com/project/11/interface/api/cat_59)
 * @标签 `Languages`
 * @请求头 `POST /api/languages`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiPostLanguagesRequestConfig: ApiPostLanguagesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_10,
  devUrl: devUrl_0_0_0_10,
  prodUrl: prodUrl_0_0_0_10,
  path: '/api/languages',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_10,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostLanguages',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [创建语言↗](https://yapi.ifoodme.com/project/11/interface/api/278) 的 **请求函数**
 *
 * @分类 [Languages↗](https://yapi.ifoodme.com/project/11/interface/api/cat_59)
 * @标签 `Languages`
 * @请求头 `POST /api/languages`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiPostLanguages = /*#__PURE__*/ (requestData?: ApiPostLanguagesRequest, ...args: UserRequestRestArgs) => {
  return request<ApiPostLanguagesResponse>(prepare(apiPostLanguagesRequestConfig, requestData), ...args)
}

apiPostLanguages.requestConfig = apiPostLanguagesRequestConfig

/**
 * 接口 [获取语言列表↗](https://yapi.ifoodme.com/project/11/interface/api/290) 的 **请求类型**
 *
 * @分类 [Languages↗](https://yapi.ifoodme.com/project/11/interface/api/cat_59)
 * @标签 `Languages`
 * @请求头 `POST /api/languages/list`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostLanguagesListRequest {}

/**
 * 接口 [获取语言列表↗](https://yapi.ifoodme.com/project/11/interface/api/290) 的 **返回类型**
 *
 * @分类 [Languages↗](https://yapi.ifoodme.com/project/11/interface/api/cat_59)
 * @标签 `Languages`
 * @请求头 `POST /api/languages/list`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostLanguagesListResponse {}

/**
 * 接口 [获取语言列表↗](https://yapi.ifoodme.com/project/11/interface/api/290) 的 **请求配置的类型**
 *
 * @分类 [Languages↗](https://yapi.ifoodme.com/project/11/interface/api/cat_59)
 * @标签 `Languages`
 * @请求头 `POST /api/languages/list`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiPostLanguagesListRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/languages/list',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [获取语言列表↗](https://yapi.ifoodme.com/project/11/interface/api/290) 的 **请求配置**
 *
 * @分类 [Languages↗](https://yapi.ifoodme.com/project/11/interface/api/cat_59)
 * @标签 `Languages`
 * @请求头 `POST /api/languages/list`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiPostLanguagesListRequestConfig: ApiPostLanguagesListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_10,
  devUrl: devUrl_0_0_0_10,
  prodUrl: prodUrl_0_0_0_10,
  path: '/api/languages/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_10,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostLanguagesList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取语言列表↗](https://yapi.ifoodme.com/project/11/interface/api/290) 的 **请求函数**
 *
 * @分类 [Languages↗](https://yapi.ifoodme.com/project/11/interface/api/cat_59)
 * @标签 `Languages`
 * @请求头 `POST /api/languages/list`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiPostLanguagesList = /*#__PURE__*/ (
  requestData?: ApiPostLanguagesListRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostLanguagesListResponse>(prepare(apiPostLanguagesListRequestConfig, requestData), ...args)
}

apiPostLanguagesList.requestConfig = apiPostLanguagesListRequestConfig

/**
 * 接口 [获取语言↗](https://yapi.ifoodme.com/project/11/interface/api/296) 的 **请求类型**
 *
 * @分类 [Languages↗](https://yapi.ifoodme.com/project/11/interface/api/cat_59)
 * @标签 `Languages`
 * @请求头 `GET /api/languages/{language_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiGetLanguagesLanguageIdRequest {
  /**
   * 语言ID
   */
  language_id: string
}

/**
 * 接口 [获取语言↗](https://yapi.ifoodme.com/project/11/interface/api/296) 的 **返回类型**
 *
 * @分类 [Languages↗](https://yapi.ifoodme.com/project/11/interface/api/cat_59)
 * @标签 `Languages`
 * @请求头 `GET /api/languages/{language_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiGetLanguagesLanguageIdResponse {}

/**
 * 接口 [获取语言↗](https://yapi.ifoodme.com/project/11/interface/api/296) 的 **请求配置的类型**
 *
 * @分类 [Languages↗](https://yapi.ifoodme.com/project/11/interface/api/cat_59)
 * @标签 `Languages`
 * @请求头 `GET /api/languages/{language_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiGetLanguagesLanguageIdRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/languages/{language_id}',
    undefined,
    'language_id',
    string,
    false
  >
>

/**
 * 接口 [获取语言↗](https://yapi.ifoodme.com/project/11/interface/api/296) 的 **请求配置**
 *
 * @分类 [Languages↗](https://yapi.ifoodme.com/project/11/interface/api/cat_59)
 * @标签 `Languages`
 * @请求头 `GET /api/languages/{language_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiGetLanguagesLanguageIdRequestConfig: ApiGetLanguagesLanguageIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_10,
  devUrl: devUrl_0_0_0_10,
  prodUrl: prodUrl_0_0_0_10,
  path: '/api/languages/{language_id}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_10,
  paramNames: ['language_id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetLanguagesLanguage_id',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取语言↗](https://yapi.ifoodme.com/project/11/interface/api/296) 的 **请求函数**
 *
 * @分类 [Languages↗](https://yapi.ifoodme.com/project/11/interface/api/cat_59)
 * @标签 `Languages`
 * @请求头 `GET /api/languages/{language_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiGetLanguagesLanguage_id = /*#__PURE__*/ (
  requestData: ApiGetLanguagesLanguageIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiGetLanguagesLanguageIdResponse>(
    prepare(apiGetLanguagesLanguageIdRequestConfig, requestData),
    ...args,
  )
}

apiGetLanguagesLanguage_id.requestConfig = apiGetLanguagesLanguageIdRequestConfig

/**
 * 接口 [删除语言↗](https://yapi.ifoodme.com/project/11/interface/api/302) 的 **请求类型**
 *
 * @分类 [Languages↗](https://yapi.ifoodme.com/project/11/interface/api/cat_59)
 * @标签 `Languages`
 * @请求头 `DELETE /api/languages/{language_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiDeleteLanguagesLanguageIdRequest {
  /**
   * 语言ID
   */
  language_id: string
}

/**
 * 接口 [删除语言↗](https://yapi.ifoodme.com/project/11/interface/api/302) 的 **返回类型**
 *
 * @分类 [Languages↗](https://yapi.ifoodme.com/project/11/interface/api/cat_59)
 * @标签 `Languages`
 * @请求头 `DELETE /api/languages/{language_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiDeleteLanguagesLanguageIdResponse {}

/**
 * 接口 [删除语言↗](https://yapi.ifoodme.com/project/11/interface/api/302) 的 **请求配置的类型**
 *
 * @分类 [Languages↗](https://yapi.ifoodme.com/project/11/interface/api/cat_59)
 * @标签 `Languages`
 * @请求头 `DELETE /api/languages/{language_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiDeleteLanguagesLanguageIdRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/languages/{language_id}',
    undefined,
    'language_id',
    string,
    false
  >
>

/**
 * 接口 [删除语言↗](https://yapi.ifoodme.com/project/11/interface/api/302) 的 **请求配置**
 *
 * @分类 [Languages↗](https://yapi.ifoodme.com/project/11/interface/api/cat_59)
 * @标签 `Languages`
 * @请求头 `DELETE /api/languages/{language_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiDeleteLanguagesLanguageIdRequestConfig: ApiDeleteLanguagesLanguageIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_10,
  devUrl: devUrl_0_0_0_10,
  prodUrl: prodUrl_0_0_0_10,
  path: '/api/languages/{language_id}',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_10,
  paramNames: ['language_id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteLanguagesLanguage_id',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [删除语言↗](https://yapi.ifoodme.com/project/11/interface/api/302) 的 **请求函数**
 *
 * @分类 [Languages↗](https://yapi.ifoodme.com/project/11/interface/api/cat_59)
 * @标签 `Languages`
 * @请求头 `DELETE /api/languages/{language_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiDeleteLanguagesLanguage_id = /*#__PURE__*/ (
  requestData: ApiDeleteLanguagesLanguageIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiDeleteLanguagesLanguageIdResponse>(
    prepare(apiDeleteLanguagesLanguageIdRequestConfig, requestData),
    ...args,
  )
}

apiDeleteLanguagesLanguage_id.requestConfig = apiDeleteLanguagesLanguageIdRequestConfig

/* prettier-ignore-end */
