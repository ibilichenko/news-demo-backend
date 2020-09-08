import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

@Schema()
export class Comment extends Document {
  @Prop({ required: true })
  author: string

  @Prop({ required: true })
  newsId: string

  @Prop({ required: true })
  text: string
}

export const CommentSchema = SchemaFactory.createForClass(Comment)
