import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule } from '@nestjs/config';

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CommentsModule } from "./comments/comments.module";

console.log(process.env.MONGO_USER);

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_USER_PASSWORD}@cluster0.dnmxb.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`
    ),
    CommentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
