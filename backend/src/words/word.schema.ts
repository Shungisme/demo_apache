import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type WordDocument = Word & Document;

@Schema({
  timestamps: true,
  toJSON: {
    transform: (doc, ret: any) => {
      ret.id = ret._id.toString();
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  },
})
export class Word {
  @Prop({ required: true })
  english: string;

  @Prop({ required: true })
  vietnamese: string;

  createdAt?: Date;
  updatedAt?: Date;
}

export const WordSchema = SchemaFactory.createForClass(Word);
