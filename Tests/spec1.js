describe('UI/Frontend Testing', () => {

    var EC = protractor.ExpectedConditions;

    it('Test case 1 - Login to the website, hard coded', () => {
        browser.get("https://cybertek-reservation-qa.herokuapp.com/");
        $('[name="email"]').sendKeys("efewtrell8c@craigslist.org");
        $('[name="password"]').sendKeys("jamesmay");
        element(by.buttonText("sign in")).click();
        browser.sleep(2000);
        expect($(".title").getText()).toEqual("VA");
        browser.sleep(2000);

    });
    
});