// controllers/contactController.js

import csv from "csv-parser";
import fs from "fs";

const contacts = [];

fs.createReadStream("contacts.csv")
  .pipe(csv({ separator: "," }))
  .on("data", (row) => {
    contacts.push({
      id: contacts.length,
      civility: row.Civilité,
      nom: row.Nom,
      prenom: row.Prénom,
      telephone: row.Téléphone,
      email: row.Email,
      dateNaissance: row["Date de naissance"],
    });
  })
  .on("end", () => {
    console.log("Contacts chargés depuis le fichier CSV", contacts);
  });

const contactController = {
  getAllContacts: (req, res) => {
    res.render("index", { contacts });
  },

  getContactDetail: (req, res) => {
    const contactId = req.params.id;
    const contact = contacts[contactId];
    res.render("contactDetail", { contact });
  },
};

export default contactController;
