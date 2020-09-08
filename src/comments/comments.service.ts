import { Injectable, NotFoundException } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Model } from "mongoose"

import { Comment } from './comment.schema'

@Injectable()
export class CommentsService {
  constructor(@InjectModel('Comments') private readonly commentsModel: Model<Comment>) {}

  async addComment(author: string, newsId: string, text: string): Promise<Comment> {
    const comment = new this.commentsModel({
      author,
      newsId,
      text,
    })

    return comment.save()
  }

  async getAllComments(): Promise<Comment[]> {
    return this.commentsModel.find().exec()
  }

  async getCommentsByNewsId(newsId: string): Promise<Comment[]> {
    const comments = await this.commentsModel.find({ newsId }).exec()

    if (comments.length === 0) {
      throw new NotFoundException("Can't find a comment by given `newsId`")
    }

    return comments 
  }

  async getCommentById(id: string): Promise<Comment> {
    const comment = await this.commentsModel.findById(id).exec()

    if (!comment) {
      throw new NotFoundException("Can't find a comment by given `id`")
    }

    return comment
  }
}
