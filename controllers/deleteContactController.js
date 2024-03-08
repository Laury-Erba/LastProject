import csv from "csv-parser";
import fs from "fs";

let contacts = [];

fs.createReadStream("contacts.csv")
  .pipe(csv({ separator: "," }))
  .on("data", (row) => {
    contacts.push(row);
  })
  .on("end", () => {
    console.log("Contacts chargés depuis le fichier CSV", contacts);
  });

const deleteContactController = {
  showDeleteContactConfirmation: (req, res) => {
    const contactId = parseInt(req.params.id, 10);
    const contact = contacts[contactId];
    res.render("deleteContact", { contact });
  },

  deleteContact: (req, res) => {
    const contactId = parseInt(req.params.id, 10);
    contacts.splice(contactId, 1);
    res.redirect("/");
  },
};

export default deleteContactController;
