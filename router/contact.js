import express from "express";
import contactController from "../controllers/contactController.js";
import addContactController from "../controllers/addContactController.js";
import deleteContactController from "../controllers/deleteContactController.js";

const router = express.Router();

router.get("/", contactController.getAllContacts);

router.get("/detail/:id", contactController.getContactDetail);
// ajout des contacts
router.get("/add", addContactController.showAddContactForm);
router.post("/add", addContactController.addContact);

// suppression de contact
router.get(
  "/delete/:id",
  deleteContactController.showDeleteContactConfirmation
);
router.post("/delete/:id", deleteContactController.deleteContact);

export default router;
