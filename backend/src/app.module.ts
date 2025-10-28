import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { WordsModule } from "./words/words.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      process.env.MONGODB_URI || "mongodb://localhost:27017/english_learning",
      {
        retryWrites: true,
        w: "majority",
      }
    ),
    WordsModule,
  ],
})
export class AppModule {}
