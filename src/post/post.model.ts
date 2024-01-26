import { Document, Schema, SchemaTypes } from "mongoose";

interface Post {
  title: string;
  description: string;
  content: string;
}

export const PostSchema = new Schema<Post>(
  {
    title: {
      type: SchemaTypes.String,
      required: true,
    },
    description: {
      type: SchemaTypes.String,
      required: true,
    },
    content: {
      type: SchemaTypes.String,
      required: true,
    },
  },
  {
    collection: "posts",
    timestamps: true,
  },
);

export interface PostDocument extends Post, Document {}
