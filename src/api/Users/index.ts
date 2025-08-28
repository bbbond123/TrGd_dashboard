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
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiGetAuthUserProfileRequest {}

/**
 * 接口 [获取用户信息↗](https://yapi.ifoodme.com/project/11/interface/api/122) 的 **返回类型**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `GET /api/auth/user/profile`
 * @更新时间 `2025-08-28 18:12:00`
 */
export interface ApiGetAuthUserProfileResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 数据
   */
  data?: {
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
 * 接口 [获取用户信息↗](https://yapi.ifoodme.com/project/11/interface/api/122) 的 **请求配置的类型**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `GET /api/auth/user/profile`
 * @更新时间 `2025-08-28 18:12:00`
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
 * @更新时间 `2025-08-28 18:12:00`
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
 * @更新时间 `2025-08-28 18:12:00`
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
 * @更新时间 `2025-08-28 18:12:01`
 */
export interface ApiPutUsersRequest {
  address?: string
  appleId?: string
  birth?: string
  email?: string
  gender?: string
  googleId?: string
  name?: string
  nameKana?: string
  password?: string
  phoneNumber?: string
  provider?: string
  role?: string
  status?: string
  /**
   * 关联标签ID数组
   */
  tagIds?: number[]
  userId: number
}

/**
 * 接口 [更新用户↗](https://yapi.ifoodme.com/project/11/interface/api/500) 的 **返回类型**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `PUT /api/users`
 * @更新时间 `2025-08-28 18:12:01`
 */
export interface ApiPutUsersResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 数据
   */
  data?: {
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
 * 接口 [更新用户↗](https://yapi.ifoodme.com/project/11/interface/api/500) 的 **请求配置的类型**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `PUT /api/users`
 * @更新时间 `2025-08-28 18:12:01`
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
    false
  >
>

/**
 * 接口 [更新用户↗](https://yapi.ifoodme.com/project/11/interface/api/500) 的 **请求配置**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `PUT /api/users`
 * @更新时间 `2025-08-28 18:12:01`
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
  requestDataOptional: false,
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
 * @更新时间 `2025-08-28 18:12:01`
 */
export const apiPutUsers = /*#__PURE__*/ (requestData: ApiPutUsersRequest, ...args: UserRequestRestArgs) => {
  return request<ApiPutUsersResponse>(prepare(apiPutUsersRequestConfig, requestData), ...args)
}

apiPutUsers.requestConfig = apiPutUsersRequestConfig

/**
 * 接口 [新建用户↗](https://yapi.ifoodme.com/project/11/interface/api/506) 的 **请求类型**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `POST /api/users`
 * @更新时间 `2025-08-28 18:12:01`
 */
export interface ApiPostUsersRequest {
  address?: string
  appleId?: string
  birth?: string
  email: string
  gender?: string
  googleId?: string
  name?: string
  nameKana?: string
  password?: string
  phoneNumber?: string
  provider: string
  role?: string
  status: string
  /**
   * 关联标签ID数组
   */
  tagIds?: number[]
}

/**
 * 接口 [新建用户↗](https://yapi.ifoodme.com/project/11/interface/api/506) 的 **返回类型**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `POST /api/users`
 * @更新时间 `2025-08-28 18:12:01`
 */
export interface ApiPostUsersResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 数据
   */
  data?: {
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
 * 接口 [新建用户↗](https://yapi.ifoodme.com/project/11/interface/api/506) 的 **请求配置的类型**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `POST /api/users`
 * @更新时间 `2025-08-28 18:12:01`
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
    false
  >
>

/**
 * 接口 [新建用户↗](https://yapi.ifoodme.com/project/11/interface/api/506) 的 **请求配置**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `POST /api/users`
 * @更新时间 `2025-08-28 18:12:01`
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
  requestDataOptional: false,
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
 * @更新时间 `2025-08-28 18:12:01`
 */
export const apiPostUsers = /*#__PURE__*/ (requestData: ApiPostUsersRequest, ...args: UserRequestRestArgs) => {
  return request<ApiPostUsersResponse>(prepare(apiPostUsersRequestConfig, requestData), ...args)
}

apiPostUsers.requestConfig = apiPostUsersRequestConfig

/**
 * 接口 [初始化示例用户数据↗](https://yapi.ifoodme.com/project/11/interface/api/512) 的 **请求类型**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `POST /api/users/init-sample`
 * @更新时间 `2025-08-28 18:12:01`
 */
export interface ApiPostUsersInitSampleRequest {}

/**
 * 接口 [初始化示例用户数据↗](https://yapi.ifoodme.com/project/11/interface/api/512) 的 **返回类型**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `POST /api/users/init-sample`
 * @更新时间 `2025-08-28 18:12:01`
 */
export interface ApiPostUsersInitSampleResponse {
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
 * 接口 [初始化示例用户数据↗](https://yapi.ifoodme.com/project/11/interface/api/512) 的 **请求配置的类型**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `POST /api/users/init-sample`
 * @更新时间 `2025-08-28 18:12:01`
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
 * @更新时间 `2025-08-28 18:12:01`
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
 * @更新时间 `2025-08-28 18:12:01`
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
 * @更新时间 `2025-08-28 18:12:01`
 */
export interface ApiPostUsersListRequest {
  /**
   * 邮箱
   */
  email?: string
  /**
   * male, female
   */
  gender?: string
  /**
   * name, name_kana
   */
  name?: string
  page: number
  pageSize: number
  phoneNumber?: string
  /**
   * google, apple, email
   */
  provider?: string
  /**
   * admin, user
   */
  role?: string
  /**
   * active, pending, inactive
   */
  status?: string
  /**
   * 标签ID数组过滤
   */
  tagIds?: number[]
  userId?: number
}

/**
 * 接口 [获取用户列表↗](https://yapi.ifoodme.com/project/11/interface/api/518) 的 **返回类型**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `POST /api/users/list`
 * @更新时间 `2025-08-28 18:12:01`
 */
export interface ApiPostUsersListResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 列表
   */
  data?: {
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
 * 接口 [获取用户列表↗](https://yapi.ifoodme.com/project/11/interface/api/518) 的 **请求配置的类型**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `POST /api/users/list`
 * @更新时间 `2025-08-28 18:12:01`
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
    false
  >
>

/**
 * 接口 [获取用户列表↗](https://yapi.ifoodme.com/project/11/interface/api/518) 的 **请求配置**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `POST /api/users/list`
 * @更新时间 `2025-08-28 18:12:01`
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
  requestDataOptional: false,
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
 * @更新时间 `2025-08-28 18:12:01`
 */
export const apiPostUsersList = /*#__PURE__*/ (requestData: ApiPostUsersListRequest, ...args: UserRequestRestArgs) => {
  return request<ApiPostUsersListResponse>(prepare(apiPostUsersListRequestConfig, requestData), ...args)
}

apiPostUsersList.requestConfig = apiPostUsersListRequestConfig

/**
 * 接口 [获取用户统计信息↗](https://yapi.ifoodme.com/project/11/interface/api/524) 的 **请求类型**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `GET /api/users/statistics`
 * @更新时间 `2025-08-28 18:12:01`
 */
export interface ApiGetUsersStatisticsRequest {}

/**
 * 接口 [获取用户统计信息↗](https://yapi.ifoodme.com/project/11/interface/api/524) 的 **返回类型**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `GET /api/users/statistics`
 * @更新时间 `2025-08-28 18:12:01`
 */
export interface ApiGetUsersStatisticsResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 数据
   */
  data?: {
    /**
     * 活跃用户数
     */
    activeUsers?: number
    /**
     * Apple注册用户数
     */
    appleUsers?: number
    /**
     * 邮箱注册用户数
     */
    emailUsers?: number
    /**
     * Google注册用户数
     */
    googleUsers?: number
    /**
     * 非活跃用户数
     */
    inactiveUsers?: number
    /**
     * 待验证用户数
     */
    pendingUsers?: number
    /**
     * 统计时间
     */
    timestamp?: string
    /**
     * 用户总数
     */
    totalUsers?: number
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
 * 接口 [获取用户统计信息↗](https://yapi.ifoodme.com/project/11/interface/api/524) 的 **请求配置的类型**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `GET /api/users/statistics`
 * @更新时间 `2025-08-28 18:12:01`
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
 * @更新时间 `2025-08-28 18:12:01`
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
 * @更新时间 `2025-08-28 18:12:01`
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
 * @更新时间 `2025-08-28 18:12:01`
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
 * @更新时间 `2025-08-28 18:12:01`
 */
export interface ApiGetUsersUserIdResponse {
  /**
   * 状态码
   */
  code?: number
  /**
   * 数据
   */
  data?: {
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
 * 接口 [获取用户信息↗](https://yapi.ifoodme.com/project/11/interface/api/530) 的 **请求配置的类型**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `GET /api/users/{user_id}`
 * @更新时间 `2025-08-28 18:12:01`
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
 * @更新时间 `2025-08-28 18:12:01`
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
 * @更新时间 `2025-08-28 18:12:01`
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
 * @更新时间 `2025-08-28 18:12:01`
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
 * @更新时间 `2025-08-28 18:12:01`
 */
export interface ApiDeleteUsersUserIdResponse {
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
 * 接口 [删除用户↗](https://yapi.ifoodme.com/project/11/interface/api/536) 的 **请求配置的类型**
 *
 * @分类 [Users↗](https://yapi.ifoodme.com/project/11/interface/api/cat_29)
 * @标签 `Users`
 * @请求头 `DELETE /api/users/{user_id}`
 * @更新时间 `2025-08-28 18:12:01`
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
 * @更新时间 `2025-08-28 18:12:01`
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
 * @更新时间 `2025-08-28 18:12:01`
 */
export const apiDeleteUsersUser_id = /*#__PURE__*/ (
  requestData: ApiDeleteUsersUserIdRequest,
  ...args: UserRequestRestArgs
) => {
  return request<ApiDeleteUsersUserIdResponse>(prepare(apiDeleteUsersUserIdRequestConfig, requestData), ...args)
}

apiDeleteUsersUser_id.requestConfig = apiDeleteUsersUserIdRequestConfig

/* prettier-ignore-end */
