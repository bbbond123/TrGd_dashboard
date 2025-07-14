export interface IBaseResponse<T> {
  data?: T
  success: boolean // 请求是否成功
  timestamp: number
  error?: IError
}
export interface IResponse<T> {
  data: T[]
  page: number
  pageSize: number
  success: boolean // 请求是否成功
  timestamp: number
  total: number
  error?: IError // 错误码，optional
  statistics?: any
}

export interface IError {
  code: number
  message: string
}

// 新增：分页查询基础参数
export interface IPaginationQuery {
  page?: number
  pageSize?: number
}

// 新增：分页响应基础结构
export interface IPaginationResponse<T> {
  success: boolean
  data: T[]
  total: number
  page: number
  pageSize: number
  timestamp: number
}


// 新增：通用操作响应
export interface IOperationResponse {
  success: boolean
  message?: string
  timestamp: number
}

