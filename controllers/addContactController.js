import csv from "csv-parser";
import fs from "fs";

const contacts = [];

fs.createReadStream("contacts.csv")
  .pipe(csv({ separator: "," }))
  .on("data", (row) => {
    contacts.push(row);
  })
  .on("end", () => {
    console.log("Contacts chargés depuis le fichier CSV", contacts);
  });

const addContactController = {
  showAddContactForm: (req, res) => {
    res.render("addContact");
  },

  addContact: (req, res) => {
    const newContact = {
      civility: req.body.civility,
      nom: req.body.nom,
      prenom: req.body.prenom,
      telephone: req.body.telephone,
      email: req.body.email,
      dateNaissance: req.body.dateNaissance,
    };

    res.redirect("/");
  },
};

export default addContactController;
