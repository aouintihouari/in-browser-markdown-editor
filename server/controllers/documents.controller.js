import Document from "../models/Document.js";
import AppError from "../utils/AppError.js";
import { catchAsync } from "../utils/catchAsync.js";

export const getDocuments = catchAsync(async (req, res, next) => {
  const documents = await Document.find().select("_id name content updatedAt");
  const formattedDocuments = documents.map((doc) => ({
    id: doc._id,
    name: doc.name,
    content: doc.content,
    date: new Date(doc.updatedAt).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
  }));
  res.status(200).json({ status: "success", documents: formattedDocuments });
});

export const createDocument = catchAsync(async (req, res, next) => {
  const newDoc = await Document.create(req.body);
  res.status(201).json({
    status: "success",
    document: { id: newDoc._id, name: newDoc.name, content: newDoc.content },
  });
});

export const updateDocument = catchAsync(async (req, res, next) => {
  const document = await Document.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!document) return next(new AppError("Document not found", 404));
  res.status(200).json({
    status: "success",
    document: {
      id: document._id,
      name: document.name,
      content: document.content,
      updatedAt: new Date(document.updatedAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    },
  });
});

export const deleteDocument = catchAsync(async (req, res, next) => {
  const document = await Document.findByIdAndDelete(req.params.id);
  if (!document) return next(new AppError("Document not found", 404));
  res.status(204).json({ status: "success", data: null });
});
