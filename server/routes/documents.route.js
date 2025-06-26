import express from "express";
import {
  getDocuments,
  createDocument,
  updateDocument,
  deleteDocument,
} from "../controllers/documents.controller.js";
import { validateBody } from "../middlewares/validate.js";
import { documentSchema } from "../validations/document.validation.js";

const router = express.Router();

router
  .route("/")
  .get(getDocuments)
  .post(validateBody(documentSchema), createDocument);
router
  .route("/:id")
  .patch(validateBody(documentSchema), updateDocument)
  .delete(deleteDocument);

export default router;
