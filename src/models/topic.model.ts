import { Schema, model } from "mongoose";
import ITopic from "./interfaces/topic.interface";

const TopicSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  position: {
    type: Number,
    required: true,
  },
  
  course: {
    type: Schema.Types.ObjectId,
    ref: "Course",
  },
  completed: {
    type: Boolean,
    default: false,
  },
  inProgress: {
    type: Boolean,
    default: false,
  },
  nextTopic: {
    type: Schema.Types.ObjectId,
    ref: "Topic",
    default: null,
  },
  prevTopic: {
    type: Schema.Types.ObjectId,
    ref: "Topic",
    default: null,
  },
});

type TopicType = ITopic;
const TopicModel = model<TopicType>("Topic", TopicSchema);
export default TopicModel;
