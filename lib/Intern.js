const Employee = require("./Employee");

class Intern {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.role = "Intern";
    }

    getRole(){
        return "Intern";
    }

    getSchool(){
        return this.school;
    }
}

module.exports = Intern;