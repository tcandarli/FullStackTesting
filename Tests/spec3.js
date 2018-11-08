// Pages

var home = require("../Pages/home.page.js");
// var testData = require("../TestData/data.json")

// DB Connection
var pgp = require('pg-promise')( /*options*/ );

describe('Login with DB connection', () => {

    var connectionString = {
        host: 'room-reservation-qa.cxvqfpt4mc2y.us-east-1.rds.amazonaws.com',
        port: 5432,
        database: 'room_reservation_qa',
        user: 'qa_user',
        password: 'Cybertek11!'
    }

    var db = pgp(connectionString);
    var arr = [];
    var username = '';
    var pass = '';

    it('Test Case 3 - Login to the website with DB connection ', () => {

        db.any(`select firstname, lastname, email from users where email = 'efewtrell8c@craigslist.org';`)
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
            })


        // Pre-test trials
        // Show all the users

        // db.any(`select * from users`)
        //     .then(function (result) {
        //         arr = result;
        //     }).catch(function (error) {
        //         console.log(error);
        //     }).then(function () {
        //         // All our automation code will be there
        //         console.log(arr);
        //     })

        // Show email, firstname, lastname and role
        // db.any(`select firstname, lastname, email, role, name 
        // from users as "u" inner join team as "t"
        // on u.team_id = t.id;`)
        //     .then((result) => {
        //         arr = result;
        //     }).catch((error) => {
        //         console.log(error);
        //     }).then(() => {
        //         console.log(arr);
        //     })

    });
});