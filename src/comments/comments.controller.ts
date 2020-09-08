import { Controller, Post, Body, Get, Param, Query } from "@nestjs/common"

import { CommentsService } from "./comments.service"
import { Comment } from "./comment.schema"

@Controller("comments")
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Post()
  async addComment(
    @Body("author") author: string,
    @Body("newsId") newsId: string,
    @Body("text") text: string
  ): Promise<Comment> {
    return this.commentsService.addComment(author, newsId, text);
  }

  @Get()
  async getComments(@Query('newsId') newsId: string): Promise<Comment[]> {
    if (newsId) {
      return this.commentsService.getCommentsByNewsId(newsId)
    }
    else {
      return this.commentsService.getAllComments()
    }
  }

  @Get(':id')
  async getCommentById(@Param('id') id: string): Promise<Comment> {
    return this.commentsService.getCommentById(id)
  }
}
