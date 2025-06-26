import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      default: "untitled-document.md",
      minlength: 1,
      maxlength: 100,
    },
    content: {
      type: String,
      default: "# create your new markdown here!",
      minlength: 1,
      maxlength: 10000,
    },
  },
  { timestamps: true }
);

const Document = mongoose.model("Document", documentSchema);

export default Document;
