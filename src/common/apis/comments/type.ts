import type { PaginationRequest } from "../type"

/** 评论 */
export interface Comment {
  commentId: number
  articleId: number
  userId: number
  username?: string
  content: string
  parentId?: number
  likeCount: number
  createdAt: string
  updatedAt: string
}

/** 评论列表请求 */
export interface CommentListRequest extends PaginationRequest {
  articleId?: number
  userId?: number
  parentId?: number
  keyword?: string
}

/** 创建评论请求 */
export interface CreateCommentRequest {
  articleId: number
  content: string
  parentId?: number
}

/** 更新评论请求 */
export interface UpdateCommentRequest {
  commentId: number
  content: string
}