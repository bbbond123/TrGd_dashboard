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
 * @更新时间 `2025-08-28 18:12:00`
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
 * @更新时间 `2025-08-28 18:12:00`
 */
export type ApiGetAuthGoogleResponse = string

/**
 * 接口 [开始 Google OAuth 认证↗](https://yapi.ifoodme.com/project/11/interface/api/74) 的 **请求配置的类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `GET /api/auth/google`
 * @更新时间 `2025-08-28 18:12:00`
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
 * @更新时间 `2025-08-28 18:12:00`
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
 * @更新时间 `2025-08-28 18:12:00`
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
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPostAuthGoogleRequest {
  id_token: string
}

/**
 * 接口 [Google社交登录\/注册↗](https://yapi.ifoodme.com/project/11/interface/api/80) 的 **返回类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/google`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPostAuthGoogleResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 数据
   */
  data?: {
    access_token?: string
    refresh_token?: string
    user?: {
      address?: string
      appleId?: string
      avatar?: string
      birth?: string
      createdAt?: string
      email?: string
      gender?: string
      googleId?: string
      name?: string
      nameKana?: string
      password?: string
      phoneNumber?: string
      /**
       * 提供商: email, google, apple
       */
      provider?: string
      /**
       * 角色: admin, user
       */
      role?: string
      /**
       * 状态: active, pending, inactive
       */
      status?: string
      /**
       * 关联标签ID数组
       */
      tagIds?: number[]
      updatedAt?: string
      userId?: number
      verifyCode?: string
      verifyCodeExpire?: string
    }
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
 * 接口 [Google社交登录\/注册↗](https://yapi.ifoodme.com/project/11/interface/api/80) 的 **请求配置的类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/google`
 * @更新时间 `2025-08-28 18:12:00`
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
    false
  >
>

/**
 * 接口 [Google社交登录\/注册↗](https://yapi.ifoodme.com/project/11/interface/api/80) 的 **请求配置**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/google`
 * @更新时间 `2025-08-28 18:12:00`
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
  requestDataOptional: false,
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
 * @更新时间 `2025-08-28 18:12:00`
 */
export const apiPostAuthGoogle = /*#__PURE__*/ (
  requestData: ApiPostAuthGoogleRequest,
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
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiGetAuthGoogleCallbackRequest {}

/**
 * 接口 [Google OAuth 回调处理↗](https://yapi.ifoodme.com/project/11/interface/api/86) 的 **返回类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `GET /api/auth/google/callback`
 * @更新时间 `2025-08-28 18:12:00`
 */
export type ApiGetAuthGoogleCallbackResponse = string

/**
 * 接口 [Google OAuth 回调处理↗](https://yapi.ifoodme.com/project/11/interface/api/86) 的 **请求配置的类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `GET /api/auth/google/callback`
 * @更新时间 `2025-08-28 18:12:00`
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
 * @更新时间 `2025-08-28 18:12:00`
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
 * @更新时间 `2025-08-28 18:12:00`
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
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPostAuthLoginRequest {
  email: string
  password: string
}

/**
 * 接口 [登录↗](https://yapi.ifoodme.com/project/11/interface/api/92) 的 **返回类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/login`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPostAuthLoginResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 数据
   */
  data?: {
    access_token?: string
    refresh_token?: string
    user?: {
      address?: string
      appleId?: string
      avatar?: string
      birth?: string
      createdAt?: string
      email?: string
      gender?: string
      googleId?: string
      name?: string
      nameKana?: string
      password?: string
      phoneNumber?: string
      /**
       * 提供商: email, google, apple
       */
      provider?: string
      /**
       * 角色: admin, user
       */
      role?: string
      /**
       * 状态: active, pending, inactive
       */
      status?: string
      /**
       * 关联标签ID数组
       */
      tagIds?: number[]
      updatedAt?: string
      userId?: number
      verifyCode?: string
      verifyCodeExpire?: string
    }
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
 * 接口 [登录↗](https://yapi.ifoodme.com/project/11/interface/api/92) 的 **请求配置的类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/login`
 * @更新时间 `2025-08-28 18:12:00`
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
    false
  >
>

/**
 * 接口 [登录↗](https://yapi.ifoodme.com/project/11/interface/api/92) 的 **请求配置**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/login`
 * @更新时间 `2025-08-28 18:12:00`
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
  requestDataOptional: false,
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
 * @更新时间 `2025-08-28 18:12:00`
 */
export const apiPostAuthLogin = /*#__PURE__*/ (requestData: ApiPostAuthLoginRequest, ...args: UserRequestRestArgs) => {
  return request<ApiPostAuthLoginResponse>(prepare(apiPostAuthLoginRequestConfig, requestData), ...args)
}

apiPostAuthLogin.requestConfig = apiPostAuthLoginRequestConfig

/**
 * 接口 [登出↗](https://yapi.ifoodme.com/project/11/interface/api/98) 的 **请求类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/logout`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPostAuthLogoutRequest {
  refresh_token: string
}

/**
 * 接口 [登出↗](https://yapi.ifoodme.com/project/11/interface/api/98) 的 **返回类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/logout`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPostAuthLogoutResponse {
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
 * 接口 [登出↗](https://yapi.ifoodme.com/project/11/interface/api/98) 的 **请求配置的类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/logout`
 * @更新时间 `2025-08-28 18:12:00`
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
    false
  >
>

/**
 * 接口 [登出↗](https://yapi.ifoodme.com/project/11/interface/api/98) 的 **请求配置**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/logout`
 * @更新时间 `2025-08-28 18:12:00`
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
  requestDataOptional: false,
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
 * @更新时间 `2025-08-28 18:12:00`
 */
export const apiPostAuthLogout = /*#__PURE__*/ (
  requestData: ApiPostAuthLogoutRequest,
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
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPostAuthRefreshRequest {
  refresh_token: string
}

/**
 * 接口 [刷新Access Token↗](https://yapi.ifoodme.com/project/11/interface/api/104) 的 **返回类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/refresh`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPostAuthRefreshResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 数据
   */
  data?: {
    access_token?: string
    refresh_token?: string
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
 * 接口 [刷新Access Token↗](https://yapi.ifoodme.com/project/11/interface/api/104) 的 **请求配置的类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/refresh`
 * @更新时间 `2025-08-28 18:12:00`
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
    false
  >
>

/**
 * 接口 [刷新Access Token↗](https://yapi.ifoodme.com/project/11/interface/api/104) 的 **请求配置**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/refresh`
 * @更新时间 `2025-08-28 18:12:00`
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
  requestDataOptional: false,
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
 * @更新时间 `2025-08-28 18:12:00`
 */
export const apiPostAuthRefresh = /*#__PURE__*/ (
  requestData: ApiPostAuthRefreshRequest,
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
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPostAuthRegisterRequest {
  email: string
  password: string
}

/**
 * 接口 [用户注册↗](https://yapi.ifoodme.com/project/11/interface/api/110) 的 **返回类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/register`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPostAuthRegisterResponse {
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
 * 接口 [用户注册↗](https://yapi.ifoodme.com/project/11/interface/api/110) 的 **请求配置的类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/register`
 * @更新时间 `2025-08-28 18:12:00`
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
    false
  >
>

/**
 * 接口 [用户注册↗](https://yapi.ifoodme.com/project/11/interface/api/110) 的 **请求配置**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/register`
 * @更新时间 `2025-08-28 18:12:00`
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
  requestDataOptional: false,
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
 * @更新时间 `2025-08-28 18:12:00`
 */
export const apiPostAuthRegister = /*#__PURE__*/ (
  requestData: ApiPostAuthRegisterRequest,
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
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPostAuthResendVerifyCodeRequest {
  email: string
}

/**
 * 接口 [重新发送验证码↗](https://yapi.ifoodme.com/project/11/interface/api/116) 的 **返回类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/resend-verify-code`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPostAuthResendVerifyCodeResponse {
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
 * 接口 [重新发送验证码↗](https://yapi.ifoodme.com/project/11/interface/api/116) 的 **请求配置的类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/resend-verify-code`
 * @更新时间 `2025-08-28 18:12:00`
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
    false
  >
>

/**
 * 接口 [重新发送验证码↗](https://yapi.ifoodme.com/project/11/interface/api/116) 的 **请求配置**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/resend-verify-code`
 * @更新时间 `2025-08-28 18:12:00`
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
  requestDataOptional: false,
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
 * @更新时间 `2025-08-28 18:12:00`
 */
export const apiPostAuthResendVerifyCode = /*#__PURE__*/ (
  requestData: ApiPostAuthResendVerifyCodeRequest,
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
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPostAuthVerifyEmailRequest {
  email: string
  verify_code: string
}

/**
 * 接口 [验证邮箱↗](https://yapi.ifoodme.com/project/11/interface/api/128) 的 **返回类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/verify-email`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPostAuthVerifyEmailResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 数据
   */
  data?: {
    access_token?: string
    refresh_token?: string
    user?: {
      address?: string
      appleId?: string
      avatar?: string
      birth?: string
      createdAt?: string
      email?: string
      gender?: string
      googleId?: string
      name?: string
      nameKana?: string
      password?: string
      phoneNumber?: string
      /**
       * 提供商: email, google, apple
       */
      provider?: string
      /**
       * 角色: admin, user
       */
      role?: string
      /**
       * 状态: active, pending, inactive
       */
      status?: string
      /**
       * 关联标签ID数组
       */
      tagIds?: number[]
      updatedAt?: string
      userId?: number
      verifyCode?: string
      verifyCodeExpire?: string
    }
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
 * 接口 [验证邮箱↗](https://yapi.ifoodme.com/project/11/interface/api/128) 的 **请求配置的类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/verify-email`
 * @更新时间 `2025-08-28 18:12:00`
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
    false
  >
>

/**
 * 接口 [验证邮箱↗](https://yapi.ifoodme.com/project/11/interface/api/128) 的 **请求配置**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/verify-email`
 * @更新时间 `2025-08-28 18:12:00`
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
  requestDataOptional: false,
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
 * @更新时间 `2025-08-28 18:12:00`
 */
export const apiPostAuthVerifyEmail = /*#__PURE__*/ (
  requestData: ApiPostAuthVerifyEmailRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostAuthVerifyEmailResponse>(prepare(apiPostAuthVerifyEmailRequestConfig, requestData), ...args)
}

apiPostAuthVerifyEmail.requestConfig = apiPostAuthVerifyEmailRequestConfig

/**
 * 接口 [发送密码重置邮件↗](https://yapi.ifoodme.com/project/11/interface/api/620) 的 **请求类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/forgot-password`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPostAuthForgotPasswordRequest {
  email: string
}

/**
 * 接口 [发送密码重置邮件↗](https://yapi.ifoodme.com/project/11/interface/api/620) 的 **返回类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/forgot-password`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPostAuthForgotPasswordResponse {
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
 * 接口 [发送密码重置邮件↗](https://yapi.ifoodme.com/project/11/interface/api/620) 的 **请求配置的类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/forgot-password`
 * @更新时间 `2025-08-28 18:12:00`
 */
type ApiPostAuthForgotPasswordRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/auth/forgot-password',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [发送密码重置邮件↗](https://yapi.ifoodme.com/project/11/interface/api/620) 的 **请求配置**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/forgot-password`
 * @更新时间 `2025-08-28 18:12:00`
 */
const apiPostAuthForgotPasswordRequestConfig: ApiPostAuthForgotPasswordRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/api/auth/forgot-password',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAuthForgotPassword',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [发送密码重置邮件↗](https://yapi.ifoodme.com/project/11/interface/api/620) 的 **请求函数**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/forgot-password`
 * @更新时间 `2025-08-28 18:12:00`
 */
export const apiPostAuthForgotPassword = /*#__PURE__*/ (
  requestData: ApiPostAuthForgotPasswordRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostAuthForgotPasswordResponse>(
    prepare(apiPostAuthForgotPasswordRequestConfig, requestData),
    ...args,
  )
}

apiPostAuthForgotPassword.requestConfig = apiPostAuthForgotPasswordRequestConfig

/**
 * 接口 [重置密码↗](https://yapi.ifoodme.com/project/11/interface/api/626) 的 **请求类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/reset-password`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPostAuthResetPasswordRequest {
  email: string
  new_password: string
  reset_code: string
}

/**
 * 接口 [重置密码↗](https://yapi.ifoodme.com/project/11/interface/api/626) 的 **返回类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/reset-password`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiPostAuthResetPasswordResponse {
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
 * 接口 [重置密码↗](https://yapi.ifoodme.com/project/11/interface/api/626) 的 **请求配置的类型**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/reset-password`
 * @更新时间 `2025-08-28 18:12:00`
 */
type ApiPostAuthResetPasswordRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/auth/reset-password',
    undefined,
    string,
    string,
    false
  >
>

/**
 * 接口 [重置密码↗](https://yapi.ifoodme.com/project/11/interface/api/626) 的 **请求配置**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/reset-password`
 * @更新时间 `2025-08-28 18:12:00`
 */
const apiPostAuthResetPasswordRequestConfig: ApiPostAuthResetPasswordRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_4,
  devUrl: devUrl_0_0_0_4,
  prodUrl: prodUrl_0_0_0_4,
  path: '/api/auth/reset-password',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_4,
  paramNames: [],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostAuthResetPassword',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [重置密码↗](https://yapi.ifoodme.com/project/11/interface/api/626) 的 **请求函数**
 *
 * @分类 [Auth↗](https://yapi.ifoodme.com/project/11/interface/api/cat_23)
 * @标签 `Auth`
 * @请求头 `POST /api/auth/reset-password`
 * @更新时间 `2025-08-28 18:12:00`
 */
export const apiPostAuthResetPassword = /*#__PURE__*/ (
  requestData: ApiPostAuthResetPasswordRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostAuthResetPasswordResponse>(prepare(apiPostAuthResetPasswordRequestConfig, requestData), ...args)
}

apiPostAuthResetPassword.requestConfig = apiPostAuthResetPasswordRequestConfig

/* prettier-ignore-end */
