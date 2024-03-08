const addContactController = {
  showAddContactForm: (req, res) => {
    res.render("addContact");
  },

  addContact: (req, res) => {
    const newContact = {
      id: contacts.length,
      civilite: req.body.civility,
      nom: req.body.nom,
      prenom: req.body.prenom,
      telephone: req.body.telephone,
      email: req.body.email,
      dateNaissance: req.body.dateNaissance,
    };

    contacts.push(newContact);

    console.log("Contact ajouté :", newContact);

    res.redirect("/");
  },
};

export default addContactController;
