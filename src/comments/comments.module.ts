import { Module } from "@nestjs/common"
import { CommentsController } from "./comments.controller"
import { CommentsService } from "./comments.service"
import { MongooseModule } from "@nestjs/mongoose"
import { CommentSchema } from "./comment.schema"

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Comments", schema: CommentSchema }]),
  ],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
