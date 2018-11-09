// Pages

var home = require("../Pages/home.page.js");
var topNav = require("../Pages/topNavigation.page.js");
var self = require("../Pages/self.page.js");

// DB Connection
var pgp = require('pg-promise')( /*options*/ );
var connectionString = require("../TestData/dbConnection.js");
var queries = require("../TestData/queries.js");

describe('Login with DB connection', () => {

    var db = pgp(connectionString);
    var arr = [];
    var username = '';
    var pass = '';

    it('Test Case 5 - Backend Testing Single Page ', () => {

        // Fetch the data from database

        db.any(queries.q2)
            .then((result) => {
                arr = result;
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
                // expect(home.title.getText()).toEqual("VA");
                // browser.sleep(2000);
                browser.actions().mouseMove(topNav.my).perform();
                browser.sleep(2000);
                topNav.self.click();
                browser.sleep(2000);

                expect(self.dataOnTable.get(0).getText()).toEqual(arr[0].firstname + " " + arr[0].lastname);
                expect(self.dataOnTable.get(1).getText()).toEqual(arr[0].role);
                // expect(self.dataOnTable.get(2).getText()).toEqual(arr[0].teamname);
            });

    });
});