// Pages

var home = require("../Pages/home.page.js");

describe('POM and TestData', () => {

    it('Test Case2 - Login to the website with POM & TestData', () => {
        browser.get("https://cybertek-reservation-qa.herokuapp.com/");

        home.email.sendKeys("efewtrell8c@craigslist.org");
        home.password.sendKeys("jamesmay");
        home.signinButton.click();
        browser.sleep(2000);
        expect(home.title.getText()).toEqual("VA");
        browser.sleep(2000);

    });
});