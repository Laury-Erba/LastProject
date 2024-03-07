import express from "express";
import contactController from "../controllers/contactController.js";

const router = express.Router();

router.get("/", contactController.getAllContacts);
router.get("/detail/:id", contactController.getContactDetail);

export default router;
