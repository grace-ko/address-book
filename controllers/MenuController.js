const inquirer = require('inquirer');
const ContactController = require("./ContactController");

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
    this.book = new ContactController();
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
    inquirer.prompt(this.book.addContactQuestions).then((answers) => {
      this.book.addContact(answers.name, answers.phone, answers.email).then((contact) => {
        console.log("Contact added successfully!");
        this.main();
      }).catch((err) => {
        console.log(err);
        this.main();
      });
    });
  }
  exit() {
    console.log("Thanks for using AddressBook!");
    process.exit();
  }
}
