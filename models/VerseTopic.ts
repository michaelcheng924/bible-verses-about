import {
  ModelOptions,
  Severity,
  getModelForClass,
  index,
  prop,
} from "@typegoose/typegoose";
import mongoose from "mongoose";

@ModelOptions({
  schemaOptions: {
    timestamps: true,
    collection: "versetopics",
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
@index({ title: 1 })
class VerseTopicClass {
  @prop({ required: true, unique: true })
  name: string;

  @prop({ required: true, unique: true })
  slug: string;

  count: Number;

  _id: mongoose.Types.ObjectId | string;
}

const VerseTopic = getModelForClass(VerseTopicClass);
export { VerseTopic, VerseTopicClass };
