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

const mockUrl_0_0_0_5 = 'https://yapi.ifoodme.com/mock/11' as any
const devUrl_0_0_0_5 = '' as any
const prodUrl_0_0_0_5 = 'https://www.ifoodme.com' as any
const dataKey_0_0_0_5 = undefined as any

/**
 * 接口 [获取用户信息↗](https://yapi.ifoodme.com/project/11/interface/api/122) 的 **请求类型**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `GET /api/auth/user/profile`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiGetAuthUserProfileRequest {}

/**
 * 接口 [获取用户信息↗](https://yapi.ifoodme.com/project/11/interface/api/122) 的 **返回类型**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `GET /api/auth/user/profile`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiGetAuthUserProfileResponse {}

/**
 * 接口 [获取用户信息↗](https://yapi.ifoodme.com/project/11/interface/api/122) 的 **请求配置的类型**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `GET /api/auth/user/profile`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiGetAuthUserProfileRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/auth/user/profile',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [获取用户信息↗](https://yapi.ifoodme.com/project/11/interface/api/122) 的 **请求配置**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `GET /api/auth/user/profile`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiGetAuthUserProfileRequestConfig: ApiGetAuthUserProfileRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/api/auth/user/profile',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetAuthUserProfile',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取用户信息↗](https://yapi.ifoodme.com/project/11/interface/api/122) 的 **请求函数**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `GET /api/auth/user/profile`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiGetAuthUserProfile = /*#__PURE__*/ (
  requestData?: ApiGetAuthUserProfileRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiGetAuthUserProfileResponse>(prepare(apiGetAuthUserProfileRequestConfig, requestData), ...args)
}

apiGetAuthUserProfile.requestConfig = apiGetAuthUserProfileRequestConfig

/**
 * 接口 [更新用户↗](https://yapi.ifoodme.com/project/11/interface/api/500) 的 **请求类型**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `PUT /api/users`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPutUsersRequest {}

/**
 * 接口 [更新用户↗](https://yapi.ifoodme.com/project/11/interface/api/500) 的 **返回类型**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `PUT /api/users`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPutUsersResponse {}

/**
 * 接口 [更新用户↗](https://yapi.ifoodme.com/project/11/interface/api/500) 的 **请求配置的类型**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `PUT /api/users`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiPutUsersRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/users',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [更新用户↗](https://yapi.ifoodme.com/project/11/interface/api/500) 的 **请求配置**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `PUT /api/users`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiPutUsersRequestConfig: ApiPutUsersRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/api/users',
  method: Method.PUT,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPutUsers',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [更新用户↗](https://yapi.ifoodme.com/project/11/interface/api/500) 的 **请求函数**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `PUT /api/users`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiPutUsers = /*#__PURE__*/ (requestData?: ApiPutUsersRequest, ...args: UserRequestRestArgs) => {
  return request<ApiPutUsersResponse>(prepare(apiPutUsersRequestConfig, requestData), ...args)
}

apiPutUsers.requestConfig = apiPutUsersRequestConfig

/**
 * 接口 [新建用户↗](https://yapi.ifoodme.com/project/11/interface/api/506) 的 **请求类型**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `POST /api/users`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostUsersRequest {}

/**
 * 接口 [新建用户↗](https://yapi.ifoodme.com/project/11/interface/api/506) 的 **返回类型**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `POST /api/users`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostUsersResponse {}

/**
 * 接口 [新建用户↗](https://yapi.ifoodme.com/project/11/interface/api/506) 的 **请求配置的类型**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `POST /api/users`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiPostUsersRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/users',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [新建用户↗](https://yapi.ifoodme.com/project/11/interface/api/506) 的 **请求配置**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `POST /api/users`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiPostUsersRequestConfig: ApiPostUsersRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/api/users',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostUsers',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [新建用户↗](https://yapi.ifoodme.com/project/11/interface/api/506) 的 **请求函数**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `POST /api/users`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiPostUsers = /*#__PURE__*/ (requestData?: ApiPostUsersRequest, ...args: UserRequestRestArgs) => {
  return request<ApiPostUsersResponse>(prepare(apiPostUsersRequestConfig, requestData), ...args)
}

apiPostUsers.requestConfig = apiPostUsersRequestConfig

/**
 * 接口 [初始化示例用户数据↗](https://yapi.ifoodme.com/project/11/interface/api/512) 的 **请求类型**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `POST /api/users/init-sample`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostUsersInitSampleRequest {}

/**
 * 接口 [初始化示例用户数据↗](https://yapi.ifoodme.com/project/11/interface/api/512) 的 **返回类型**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `POST /api/users/init-sample`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostUsersInitSampleResponse {}

/**
 * 接口 [初始化示例用户数据↗](https://yapi.ifoodme.com/project/11/interface/api/512) 的 **请求配置的类型**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `POST /api/users/init-sample`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiPostUsersInitSampleRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/users/init-sample',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [初始化示例用户数据↗](https://yapi.ifoodme.com/project/11/interface/api/512) 的 **请求配置**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `POST /api/users/init-sample`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiPostUsersInitSampleRequestConfig: ApiPostUsersInitSampleRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/api/users/init-sample',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostUsersInitSample',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [初始化示例用户数据↗](https://yapi.ifoodme.com/project/11/interface/api/512) 的 **请求函数**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `POST /api/users/init-sample`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiPostUsersInitSample = /*#__PURE__*/ (
  requestData?: ApiPostUsersInitSampleRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiPostUsersInitSampleResponse>(prepare(apiPostUsersInitSampleRequestConfig, requestData), ...args)
}

apiPostUsersInitSample.requestConfig = apiPostUsersInitSampleRequestConfig

/**
 * 接口 [获取用户列表↗](https://yapi.ifoodme.com/project/11/interface/api/518) 的 **请求类型**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `POST /api/users/list`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostUsersListRequest {}

/**
 * 接口 [获取用户列表↗](https://yapi.ifoodme.com/project/11/interface/api/518) 的 **返回类型**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `POST /api/users/list`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiPostUsersListResponse {}

/**
 * 接口 [获取用户列表↗](https://yapi.ifoodme.com/project/11/interface/api/518) 的 **请求配置的类型**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `POST /api/users/list`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiPostUsersListRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/users/list',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [获取用户列表↗](https://yapi.ifoodme.com/project/11/interface/api/518) 的 **请求配置**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `POST /api/users/list`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiPostUsersListRequestConfig: ApiPostUsersListRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/api/users/list',
  method: Method.POST,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiPostUsersList',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取用户列表↗](https://yapi.ifoodme.com/project/11/interface/api/518) 的 **请求函数**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `POST /api/users/list`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiPostUsersList = /*#__PURE__*/ (requestData?: ApiPostUsersListRequest, ...args: UserRequestRestArgs) => {
  return request<ApiPostUsersListResponse>(prepare(apiPostUsersListRequestConfig, requestData), ...args)
}

apiPostUsersList.requestConfig = apiPostUsersListRequestConfig

/**
 * 接口 [获取用户统计信息↗](https://yapi.ifoodme.com/project/11/interface/api/524) 的 **请求类型**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `GET /api/users/statistics`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiGetUsersStatisticsRequest {}

/**
 * 接口 [获取用户统计信息↗](https://yapi.ifoodme.com/project/11/interface/api/524) 的 **返回类型**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `GET /api/users/statistics`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiGetUsersStatisticsResponse {}

/**
 * 接口 [获取用户统计信息↗](https://yapi.ifoodme.com/project/11/interface/api/524) 的 **请求配置的类型**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `GET /api/users/statistics`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiGetUsersStatisticsRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/users/statistics',
    undefined,
    string,
    string,
    true
  >
>

/**
 * 接口 [获取用户统计信息↗](https://yapi.ifoodme.com/project/11/interface/api/524) 的 **请求配置**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `GET /api/users/statistics`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiGetUsersStatisticsRequestConfig: ApiGetUsersStatisticsRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/api/users/statistics',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: [],
  queryNames: [],
  requestDataOptional: true,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetUsersStatistics',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取用户统计信息↗](https://yapi.ifoodme.com/project/11/interface/api/524) 的 **请求函数**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `GET /api/users/statistics`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiGetUsersStatistics = /*#__PURE__*/ (
  requestData?: ApiGetUsersStatisticsRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiGetUsersStatisticsResponse>(prepare(apiGetUsersStatisticsRequestConfig, requestData), ...args)
}

apiGetUsersStatistics.requestConfig = apiGetUsersStatisticsRequestConfig

/**
 * 接口 [获取用户信息↗](https://yapi.ifoodme.com/project/11/interface/api/530) 的 **请求类型**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `GET /api/users/{user_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiGetUsersUserIdRequest {
  /**
   * 用户ID
   */
  user_id: string
}

/**
 * 接口 [获取用户信息↗](https://yapi.ifoodme.com/project/11/interface/api/530) 的 **返回类型**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `GET /api/users/{user_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiGetUsersUserIdResponse {}

/**
 * 接口 [获取用户信息↗](https://yapi.ifoodme.com/project/11/interface/api/530) 的 **请求配置的类型**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `GET /api/users/{user_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiGetUsersUserIdRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/users/{user_id}',
    undefined,
    'user_id',
    string,
    false
  >
>

/**
 * 接口 [获取用户信息↗](https://yapi.ifoodme.com/project/11/interface/api/530) 的 **请求配置**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `GET /api/users/{user_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiGetUsersUserIdRequestConfig: ApiGetUsersUserIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/api/users/{user_id}',
  method: Method.GET,
  requestHeaders: {},
  requestBodyType: RequestBodyType.query,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: ['user_id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiGetUsersUser_id',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [获取用户信息↗](https://yapi.ifoodme.com/project/11/interface/api/530) 的 **请求函数**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `GET /api/users/{user_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiGetUsersUser_id = /*#__PURE__*/ (
  requestData: ApiGetUsersUserIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiGetUsersUserIdResponse>(prepare(apiGetUsersUserIdRequestConfig, requestData), ...args)
}

apiGetUsersUser_id.requestConfig = apiGetUsersUserIdRequestConfig

/**
 * 接口 [删除用户↗](https://yapi.ifoodme.com/project/11/interface/api/536) 的 **请求类型**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `DELETE /api/users/{user_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiDeleteUsersUserIdRequest {
  /**
   * 用户ID
   */
  user_id: string
}

/**
 * 接口 [删除用户↗](https://yapi.ifoodme.com/project/11/interface/api/536) 的 **返回类型**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `DELETE /api/users/{user_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
export interface ApiDeleteUsersUserIdResponse {}

/**
 * 接口 [删除用户↗](https://yapi.ifoodme.com/project/11/interface/api/536) 的 **请求配置的类型**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `DELETE /api/users/{user_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
type ApiDeleteUsersUserIdRequestConfig = Readonly<
  RequestConfig<
    'https://yapi.ifoodme.com/mock/11',
    '',
    'https://www.ifoodme.com',
    '/api/users/{user_id}',
    undefined,
    'user_id',
    string,
    false
  >
>

/**
 * 接口 [删除用户↗](https://yapi.ifoodme.com/project/11/interface/api/536) 的 **请求配置**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `DELETE /api/users/{user_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
const apiDeleteUsersUserIdRequestConfig: ApiDeleteUsersUserIdRequestConfig = /*#__PURE__*/ {
  mockUrl: mockUrl_0_0_0_5,
  devUrl: devUrl_0_0_0_5,
  prodUrl: prodUrl_0_0_0_5,
  path: '/api/users/{user_id}',
  method: Method.DELETE,
  requestHeaders: {},
  requestBodyType: RequestBodyType.json,
  responseBodyType: ResponseBodyType.json,
  dataKey: dataKey_0_0_0_5,
  paramNames: ['user_id'],
  queryNames: [],
  requestDataOptional: false,
  requestDataJsonSchema: {},
  responseDataJsonSchema: {},
  requestFunctionName: 'apiDeleteUsersUser_id',
  queryStringArrayFormat: QueryStringArrayFormat.brackets,
  extraInfo: {},
}

/**
 * 接口 [删除用户↗](https://yapi.ifoodme.com/project/11/interface/api/536) 的 **请求函数**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `DELETE /api/users/{user_id}`
 * @更新时间 `2025-07-08 23:44:19`
 */
export const apiDeleteUsersUser_id = /*#__PURE__*/ (
  requestData: ApiDeleteUsersUserIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiDeleteUsersUserIdResponse>(prepare(apiDeleteUsersUserIdRequestConfig, requestData), ...args)
}

apiDeleteUsersUser_id.requestConfig = apiDeleteUsersUserIdRequestConfig

/* prettier-ignore-end */
