// Pages

var home = require("../Pages/home.page.js");
// var testData = require("../TestData/data.json")

// DB Connection
var pgp = require('pg-promise')( /*options*/ );
var connectionString = require("../TestData/dbConnection.js");
var queries = require("../TestData/queries.js");

describe('Login with DB connection', () => {

    var db = pgp(connectionString);
    var arr = [];
    var username = '';
    var pass = '';

    it('Test Case 4 - Connection String and Queries POM ', () => {

        db.any(queries.q1);
            .then((result) => {
                username = result[0].email;
                //console.log(username);
                pass = result[0].firstname.toLowerCase() + result[0].lastname.toLowerCase();
                // console.log(pass);
            }).catch((error) => {
                console.log(error);
            }).then(() => {
                // All UI automation code

                browser.get("https://cybertek-reservation-qa.herokuapp.com/");
                home.email.sendKeys(username);
                home.password.sendKeys(pass);
                home.signinButton.click();
                browser.sleep(2000);
                expect(home.title.getText()).toEqual("VA");
                browser.sleep(2000);
            });

    });
});