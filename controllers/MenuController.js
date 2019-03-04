const inquirer = require('inquirer');

module.exports = class MenuController {
  constructor(){
    this.mainMenuQuestions = [
      {
        type: "list",
        name: "mainMenuChoice",
        message: "Please choose from an option below",
        choices: [
          "Add new contact",
          "See today's date",
          "Exit"
        ]
      }
    ];
    this.contacts = [];
  }

  main(){
    console.log('Welcome to AddressBook!');
    inquirer.prompt(this.mainMenuQuestions).then((response) => {
      switch(response.mainMenuChoice) {
        case "Add new contact":
          this.addContact();
        break;
        case "See today's date":
          this.getDate();
        break;
        case "Exit":
          this.exit();
        default:
          console.log("Invalide input");
          this.main();
        }
      })
      .catch((err) => {
        console.log(err);
    });
  }

  clear(){
    console.log('\x1Bc');
  }

  getDate() {
    const date = new Date();
    console.log(date.toDateString());
    this.main();
  }

  addContact() {
    this.clear();
    console.log('addContact called');
    this.main();
  }
  getContactCount() {
    return this.contacts.length;
  }
  remindMe() {
    return 'Learning is a life-long pursuit';
  }
  exit() {
    console.log("Thanks for using AddressBook!");
    process.exit();
  }
}
