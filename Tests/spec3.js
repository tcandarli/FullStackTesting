// Pages

var home = require("../Pages/home.page.js");
var testData = require("../TestData/data.json")

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

    it('Test Case 3 - Login to the website with DB connection ', () => {

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
        db.any(`select firstname, lastname, email, role from users`)
            .then((result) => {
                arr = result;
            }).catch((error) => {
                console.log(error);
            }).then(() => {
                console.log(arr);
            })
        
    });
});