import { InjectModel } from "@nestjs/mongoose";
import { BaseRepository } from "../base.repository";
import { PostDocument } from "./post.model";
import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PostRepository extends BaseRepository<PostDocument> {
  constructor(
    @InjectModel("Post") private readonly postModel: Model<PostDocument>,
  ) {
    super(postModel);
  }
}
