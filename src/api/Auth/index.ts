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

const mockUrl_0_0_0_4 = 'https://yapi.ifoodme.com/mock/11' as any
const devUrl_0_0_0_4 = '' as any
const prodUrl_0_0_0_4 = 'https://www.ifoodme.com' as any
const dataKey_0_0_0_4 = undefined as any

/**
 * 接口 [开始 Google OAuth 认证↗](https://yapi.ifoodme.com/project/11/interface/api/74) 的 **请求类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `GET /api/auth/google`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiGetAuthGoogleRequest {
  /**
   * 重定向URL，支持深度链接(如: travelview://google-auth-callback)
   */
  redirect?: string
}

/**
 * 接口 [开始 Google OAuth 认证↗](https://yapi.ifoodme.com/project/11/interface/api/74) 的 **返回类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `GET /api/auth/google`
 * @更新时间 `2025-07-08 23:44:19`
 */
export type ApiGetAuthGoogleResponse = string

/**
 * 接口 [开始 Google OAuth 认证↗](https://yapi.ifoodme.com/project/11/interface/api/74) 的 **请求配置的类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `GET /api/auth/google`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiGetAuthGoogleRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/auth/google',
    undefined,
    string,
    'redirect',
    false
  >
>

/**
 * 接口 [开始 Google OAuth 认证↗](https://yapi.ifoodme.com/project/11/interface/api/74) 的 **请求配置**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `GET /api/auth/google`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiGetAuthGoogleRequestConfig: ApiGetAuthGoogleRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/api/auth/google',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: ['redirect'],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetAuthGoogle',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [开始 Google OAuth 认证↗](https://yapi.ifoodme.com/project/11/interface/api/74) 的 **请求函数**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `GET /api/auth/google`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiGetAuthGoogle = /*#__PURE__*/ (requestData: ApiGetAuthGoogleRequest, ...args: UserRequestRestArgs) => {
  return request<ApiGetAuthGoogleResponse>(prepare(apiGetAuthGoogleRequestConfig, requestData), ...args)
}

apiGetAuthGoogle.requestConfig = apiGetAuthGoogleRequestConfig

/**
 * 接口 [Google社交登录\/注册↗](https://yapi.ifoodme.com/project/11/interface/api/80) 的 **请求类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/google`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostAuthGoogleRequest {}

/**
 * 接口 [Google社交登录\/注册↗](https://yapi.ifoodme.com/project/11/interface/api/80) 的 **返回类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/google`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostAuthGoogleResponse {}

/**
 * 接口 [Google社交登录\/注册↗](https://yapi.ifoodme.com/project/11/interface/api/80) 的 **请求配置的类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/google`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiPostAuthGoogleRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/auth/google',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [Google社交登录\/注册↗](https://yapi.ifoodme.com/project/11/interface/api/80) 的 **请求配置**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/google`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiPostAuthGoogleRequestConfig: ApiPostAuthGoogleRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/api/auth/google',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAuthGoogle',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [Google社交登录\/注册↗](https://yapi.ifoodme.com/project/11/interface/api/80) 的 **请求函数**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/google`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiPostAuthGoogle = /*#__PURE__*/ (
  requestData?: ApiPostAuthGoogleRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostAuthGoogleResponse>(prepare(apiPostAuthGoogleRequestConfig, requestData), ...args)
}

apiPostAuthGoogle.requestConfig = apiPostAuthGoogleRequestConfig

/**
 * 接口 [Google OAuth 回调处理↗](https://yapi.ifoodme.com/project/11/interface/api/86) 的 **请求类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `GET /api/auth/google/callback`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiGetAuthGoogleCallbackRequest {}

/**
 * 接口 [Google OAuth 回调处理↗](https://yapi.ifoodme.com/project/11/interface/api/86) 的 **返回类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `GET /api/auth/google/callback`
 * @更新时间 `2025-07-08 23:44:19`
 */
export type ApiGetAuthGoogleCallbackResponse = string

/**
 * 接口 [Google OAuth 回调处理↗](https://yapi.ifoodme.com/project/11/interface/api/86) 的 **请求配置的类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `GET /api/auth/google/callback`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiGetAuthGoogleCallbackRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/auth/google/callback',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [Google OAuth 回调处理↗](https://yapi.ifoodme.com/project/11/interface/api/86) 的 **请求配置**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `GET /api/auth/google/callback`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiGetAuthGoogleCallbackRequestConfig: ApiGetAuthGoogleCallbackRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/api/auth/google/callback',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetAuthGoogleCallback',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [Google OAuth 回调处理↗](https://yapi.ifoodme.com/project/11/interface/api/86) 的 **请求函数**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `GET /api/auth/google/callback`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiGetAuthGoogleCallback = /*#__PURE__*/ (
  requestData?: ApiGetAuthGoogleCallbackRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiGetAuthGoogleCallbackResponse>(prepare(apiGetAuthGoogleCallbackRequestConfig, requestData), ...args)
}

apiGetAuthGoogleCallback.requestConfig = apiGetAuthGoogleCallbackRequestConfig

/**
 * 接口 [登录↗](https://yapi.ifoodme.com/project/11/interface/api/92) 的 **请求类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/login`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostAuthLoginRequest {}

/**
 * 接口 [登录↗](https://yapi.ifoodme.com/project/11/interface/api/92) 的 **返回类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/login`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostAuthLoginResponse {}

/**
 * 接口 [登录↗](https://yapi.ifoodme.com/project/11/interface/api/92) 的 **请求配置的类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/login`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiPostAuthLoginRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/auth/login',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [登录↗](https://yapi.ifoodme.com/project/11/interface/api/92) 的 **请求配置**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/login`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiPostAuthLoginRequestConfig: ApiPostAuthLoginRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/api/auth/login',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAuthLogin',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [登录↗](https://yapi.ifoodme.com/project/11/interface/api/92) 的 **请求函数**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/login`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiPostAuthLogin = /*#__PURE__*/ (requestData?: ApiPostAuthLoginRequest, ...args: UserRequestRestArgs) => {
  return request<ApiPostAuthLoginResponse>(prepare(apiPostAuthLoginRequestConfig, requestData), ...args)
}

apiPostAuthLogin.requestConfig = apiPostAuthLoginRequestConfig

/**
 * 接口 [登出↗](https://yapi.ifoodme.com/project/11/interface/api/98) 的 **请求类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/logout`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostAuthLogoutRequest {}

/**
 * 接口 [登出↗](https://yapi.ifoodme.com/project/11/interface/api/98) 的 **返回类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/logout`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostAuthLogoutResponse {}

/**
 * 接口 [登出↗](https://yapi.ifoodme.com/project/11/interface/api/98) 的 **请求配置的类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/logout`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiPostAuthLogoutRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/auth/logout',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [登出↗](https://yapi.ifoodme.com/project/11/interface/api/98) 的 **请求配置**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/logout`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiPostAuthLogoutRequestConfig: ApiPostAuthLogoutRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/api/auth/logout',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAuthLogout',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [登出↗](https://yapi.ifoodme.com/project/11/interface/api/98) 的 **请求函数**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/logout`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiPostAuthLogout = /*#__PURE__*/ (
  requestData?: ApiPostAuthLogoutRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostAuthLogoutResponse>(prepare(apiPostAuthLogoutRequestConfig, requestData), ...args)
}

apiPostAuthLogout.requestConfig = apiPostAuthLogoutRequestConfig

/**
 * 接口 [刷新Access Token↗](https://yapi.ifoodme.com/project/11/interface/api/104) 的 **请求类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/refresh`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostAuthRefreshRequest {}

/**
 * 接口 [刷新Access Token↗](https://yapi.ifoodme.com/project/11/interface/api/104) 的 **返回类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/refresh`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostAuthRefreshResponse {}

/**
 * 接口 [刷新Access Token↗](https://yapi.ifoodme.com/project/11/interface/api/104) 的 **请求配置的类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/refresh`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiPostAuthRefreshRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/auth/refresh',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [刷新Access Token↗](https://yapi.ifoodme.com/project/11/interface/api/104) 的 **请求配置**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/refresh`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiPostAuthRefreshRequestConfig: ApiPostAuthRefreshRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/api/auth/refresh',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAuthRefresh',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [刷新Access Token↗](https://yapi.ifoodme.com/project/11/interface/api/104) 的 **请求函数**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/refresh`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiPostAuthRefresh = /*#__PURE__*/ (
  requestData?: ApiPostAuthRefreshRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostAuthRefreshResponse>(prepare(apiPostAuthRefreshRequestConfig, requestData), ...args)
}

apiPostAuthRefresh.requestConfig = apiPostAuthRefreshRequestConfig

/**
 * 接口 [用户注册↗](https://yapi.ifoodme.com/project/11/interface/api/110) 的 **请求类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/register`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostAuthRegisterRequest {}

/**
 * 接口 [用户注册↗](https://yapi.ifoodme.com/project/11/interface/api/110) 的 **返回类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/register`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostAuthRegisterResponse {}

/**
 * 接口 [用户注册↗](https://yapi.ifoodme.com/project/11/interface/api/110) 的 **请求配置的类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/register`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiPostAuthRegisterRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/auth/register',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [用户注册↗](https://yapi.ifoodme.com/project/11/interface/api/110) 的 **请求配置**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/register`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiPostAuthRegisterRequestConfig: ApiPostAuthRegisterRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/api/auth/register',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAuthRegister',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [用户注册↗](https://yapi.ifoodme.com/project/11/interface/api/110) 的 **请求函数**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/register`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiPostAuthRegister = /*#__PURE__*/ (
  requestData?: ApiPostAuthRegisterRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostAuthRegisterResponse>(prepare(apiPostAuthRegisterRequestConfig, requestData), ...args)
}

apiPostAuthRegister.requestConfig = apiPostAuthRegisterRequestConfig

/**
 * 接口 [重新发送验证码↗](https://yapi.ifoodme.com/project/11/interface/api/116) 的 **请求类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/resend-verify-code`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostAuthResendVerifyCodeRequest {}

/**
 * 接口 [重新发送验证码↗](https://yapi.ifoodme.com/project/11/interface/api/116) 的 **返回类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/resend-verify-code`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostAuthResendVerifyCodeResponse {}

/**
 * 接口 [重新发送验证码↗](https://yapi.ifoodme.com/project/11/interface/api/116) 的 **请求配置的类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/resend-verify-code`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiPostAuthResendVerifyCodeRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/auth/resend-verify-code',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [重新发送验证码↗](https://yapi.ifoodme.com/project/11/interface/api/116) 的 **请求配置**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/resend-verify-code`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiPostAuthResendVerifyCodeRequestConfig: ApiPostAuthResendVerifyCodeRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/api/auth/resend-verify-code',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAuthResendVerifyCode',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [重新发送验证码↗](https://yapi.ifoodme.com/project/11/interface/api/116) 的 **请求函数**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/resend-verify-code`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiPostAuthResendVerifyCode = /*#__PURE__*/ (
  requestData?: ApiPostAuthResendVerifyCodeRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostAuthResendVerifyCodeResponse>(
    prepare(apiPostAuthResendVerifyCodeRequestConfig, requestData),
    ...args,
  )
}

apiPostAuthResendVerifyCode.requestConfig = apiPostAuthResendVerifyCodeRequestConfig

/**
 * 接口 [验证邮箱↗](https://yapi.ifoodme.com/project/11/interface/api/128) 的 **请求类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/verify-email`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostAuthVerifyEmailRequest {}

/**
 * 接口 [验证邮箱↗](https://yapi.ifoodme.com/project/11/interface/api/128) 的 **返回类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/verify-email`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostAuthVerifyEmailResponse {}

/**
 * 接口 [验证邮箱↗](https://yapi.ifoodme.com/project/11/interface/api/128) 的 **请求配置的类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/verify-email`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiPostAuthVerifyEmailRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/auth/verify-email',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [验证邮箱↗](https://yapi.ifoodme.com/project/11/interface/api/128) 的 **请求配置**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/verify-email`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiPostAuthVerifyEmailRequestConfig: ApiPostAuthVerifyEmailRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/api/auth/verify-email',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAuthVerifyEmail',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [验证邮箱↗](https://yapi.ifoodme.com/project/11/interface/api/128) 的 **请求函数**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/verify-email`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiPostAuthVerifyEmail = /*#__PURE__*/ (
  requestData?: ApiPostAuthVerifyEmailRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostAuthVerifyEmailResponse>(prepare(apiPostAuthVerifyEmailRequestConfig, requestData), ...args)
}

apiPostAuthVerifyEmail.requestConfig = apiPostAuthVerifyEmailRequestConfig

/* prettier-ignore-end */
