const debug = import.meta.env.MODE !== 'production'
import type { IResponse, IBaseResponse } from '@/api/type'

export default ({ mock, setup }: { mock?: boolean; setup: () => void }) => {
  if (mock !== false && debug) setup()
}

export const successIBaseResponse = <T>(data: T, errMessage = 'success'): Promise<IBaseResponse<T>> => {
  return Promise.resolve({
    success: true,
    errCode: 0,
    errMessage,
    data,
    timestamp: Date.now()
  })
}

export const successIResponse = <T>(data: T[], errMessage = 'success'): Promise<IResponse<T>> => {
  return Promise.resolve({
    success: true,
    errCode: 0,
    errMessage,
    data,
    timestamp: Date.now(),
    page: 1,
    pageSize: 10,
    total: 100
  })
}

export const successResponseWrapNew = <T = any>(data: T, errMessage = 'success') => {
  return {
    success: true,
    errCode: 0,
    errMessage,
    data
  }
}

export const successResponseWrap = <T = any>(data: T, errMessage = 'success') => {
  return {
    success: true,
    errCode: 0,
    errMessage,
    data
  }
}

export const failResponseWrap = (data: unknown, errMessage: string, errCode = 50000) => {
  return {
    success: false,
    errCode,
    errMessage,
    data
  }
}
