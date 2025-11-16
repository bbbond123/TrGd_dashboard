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

const mockUrl_0_0_0_9 = 'https://yapi.ifoodme.com/mock/11' as any
const devUrl_0_0_0_9 = '' as any
const prodUrl_0_0_0_9 = 'https://www.ifoodme.com' as any
const dataKey_0_0_0_9 = undefined as any

/**
 * 接口 [获取支持的语言列表↗](https://yapi.ifoodme.com/project/11/interface/api/266) 的 **请求类型**
 *
 * @分类 [语言管理↗](https://yapi.ifoodme.com/project/11/interface/api/cat_53)
 * @标签 `语言管理`
 * @请求头 `GET /api/languages`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiGetLanguagesRequest {}

/**
 * 接口 [获取支持的语言列表↗](https://yapi.ifoodme.com/project/11/interface/api/266) 的 **返回类型**
 *
 * @分类 [语言管理↗](https://yapi.ifoodme.com/project/11/interface/api/cat_53)
 * @标签 `语言管理`
 * @请求头 `GET /api/languages`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiGetLanguagesResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 数据
   */
  data?: {}
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
 * 接口 [获取支持的语言列表↗](https://yapi.ifoodme.com/project/11/interface/api/266) 的 **请求配置的类型**
 *
 * @分类 [语言管理↗](https://yapi.ifoodme.com/project/11/interface/api/cat_53)
 * @标签 `语言管理`
 * @请求头 `GET /api/languages`
 * @更新时间 `2025-08-30 13:36:00`
 */
type ApiGetLanguagesRequestConfig = Readonly<
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
 * 接口 [获取支持的语言列表↗](https://yapi.ifoodme.com/project/11/interface/api/266) 的 **请求配置**
 *
 * @分类 [语言管理↗](https://yapi.ifoodme.com/project/11/interface/api/cat_53)
 * @标签 `语言管理`
 * @请求头 `GET /api/languages`
 * @更新时间 `2025-08-30 13:36:00`
 */
const apiGetLanguagesRequestConfig: ApiGetLanguagesRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_9,
  devUrl: devUrl_0_0_0_9,
  prodUrl: prodUrl_0_0_0_9,
  path: '/api/languages',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_9,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetLanguages',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取支持的语言列表↗](https://yapi.ifoodme.com/project/11/interface/api/266) 的 **请求函数**
 *
 * @分类 [语言管理↗](https://yapi.ifoodme.com/project/11/interface/api/cat_53)
 * @标签 `语言管理`
 * @请求头 `GET /api/languages`
 * @更新时间 `2025-08-30 13:36:00`
 */
export const apiGetLanguages = /*#__PURE__*/ (requestData?: ApiGetLanguagesRequest, ...args: UserRequestRestArgs) => {
  return request<ApiGetLanguagesResponse>(prepare(apiGetLanguagesRequestConfig, requestData), ...args)
}

apiGetLanguages.requestConfig = apiGetLanguagesRequestConfig

/**
 * 接口 [获取当前用户的语言设置↗](https://yapi.ifoodme.com/project/11/interface/api/284) 的 **请求类型**
 *
 * @分类 [语言管理↗](https://yapi.ifoodme.com/project/11/interface/api/cat_53)
 * @标签 `语言管理`
 * @请求头 `GET /api/languages/current`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiGetLanguagesCurrentRequest {}

/**
 * 接口 [获取当前用户的语言设置↗](https://yapi.ifoodme.com/project/11/interface/api/284) 的 **返回类型**
 *
 * @分类 [语言管理↗](https://yapi.ifoodme.com/project/11/interface/api/cat_53)
 * @标签 `语言管理`
 * @请求头 `GET /api/languages/current`
 * @更新时间 `2025-08-30 13:36:00`
 */
export interface ApiGetLanguagesCurrentResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 数据
   */
  data?: {}
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
 * 接口 [获取当前用户的语言设置↗](https://yapi.ifoodme.com/project/11/interface/api/284) 的 **请求配置的类型**
 *
 * @分类 [语言管理↗](https://yapi.ifoodme.com/project/11/interface/api/cat_53)
 * @标签 `语言管理`
 * @请求头 `GET /api/languages/current`
 * @更新时间 `2025-08-30 13:36:00`
 */
type ApiGetLanguagesCurrentRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/languages/current',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [获取当前用户的语言设置↗](https://yapi.ifoodme.com/project/11/interface/api/284) 的 **请求配置**
 *
 * @分类 [语言管理↗](https://yapi.ifoodme.com/project/11/interface/api/cat_53)
 * @标签 `语言管理`
 * @请求头 `GET /api/languages/current`
 * @更新时间 `2025-08-30 13:36:00`
 */
const apiGetLanguagesCurrentRequestConfig: ApiGetLanguagesCurrentRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_9,
  devUrl: devUrl_0_0_0_9,
  prodUrl: prodUrl_0_0_0_9,
  path: '/api/languages/current',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_9,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetLanguagesCurrent',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取当前用户的语言设置↗](https://yapi.ifoodme.com/project/11/interface/api/284) 的 **请求函数**
 *
 * @分类 [语言管理↗](https://yapi.ifoodme.com/project/11/interface/api/cat_53)
 * @标签 `语言管理`
 * @请求头 `GET /api/languages/current`
 * @更新时间 `2025-08-30 13:36:00`
 */
export const apiGetLanguagesCurrent = /*#__PURE__*/ (
  requestData?: ApiGetLanguagesCurrentRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiGetLanguagesCurrentResponse>(prepare(apiGetLanguagesCurrentRequestConfig, requestData), ...args)
}

apiGetLanguagesCurrent.requestConfig = apiGetLanguagesCurrentRequestConfig

/* prettier-ignore-end */
