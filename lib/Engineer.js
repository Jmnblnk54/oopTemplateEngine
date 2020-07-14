const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, GitHUb) {
        super(name, id, email);
        this.GitHUb = GitHub;
        this.role = "Engineer";
    }

    getRole(){
        return "Engineer";
    }

    getGithub(){
        return this.GitHubUser;
    }
}

module.exports = Engineer;