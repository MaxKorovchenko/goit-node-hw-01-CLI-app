const argv = require('yargs').argv;

const contacts = require('./contacts');

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'getAll':
      const allContacts = await contacts.getAllContacts();
      return console.table(allContacts);

    case 'getById':
      const contact = await contacts.getContactById(id);
      return console.table(contact);

    case 'add':
      const newContact = await contacts.addContact(name, email, phone);
      return console.table(newContact);

    case 'remove':
      const deletedContact = await contacts.removeContact(id);
      return console.table(deletedContact);

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

invokeAction(argv);
