import express from "express";
import contactController from "../controllers/contactController.js";
import addContactController from "../controllers/addContactController.js";

const router = express.Router();

router.get("/", contactController.getAllContacts);
router.get("/detail/:id", contactController.getContactDetail);
router.get("/add", addContactController.showAddContactForm);
router.post("/add", addContactController.addContact);
export default router;
