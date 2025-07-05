import type { IBaseResponse, IResponse } from "../type"
import type { Comment, CommentListRequest, CreateCommentRequest, UpdateCommentRequest } from "./type"
import { request } from "@/http/axios"

/** 获取评论列表 */
export function getCommentListApi(data: CommentListRequest) {
  return request<IResponse<Comment>>({
    url: "/api/comments/list",
    method: "post",
    data
  })
}

/** 获取评论详情 */
export function getCommentDetailApi(commentId: number) {
  return request<IBaseResponse<Comment>>({
    url: `/api/comments/${commentId}`,
    method: "get"
  })
}

/** 创建评论 */
export function createCommentApi(data: CreateCommentRequest) {
  return request<IBaseResponse<Comment>>({
    url: "/api/comments",
    method: "post",
    data
  })
}

/** 更新评论 */
export function updateCommentApi(data: UpdateCommentRequest) {
  return request<IBaseResponse<Comment>>({
    url: `/api/comments/${data.commentId}`,
    method: "put",
    data
  })
}

/** 删除评论 */
export function deleteCommentApi(commentId: number) {
  return request<IBaseResponse<boolean>>({
    url: `/api/comments/${commentId}`,
    method: "delete"
  })
}