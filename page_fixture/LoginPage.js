const {test,expect} = require('@playwright/test');
const BasePage = require('../page_fixture/BasePage');

class LoginPage extends BasePage{
    constructor(page){
        super(page);
        this.mainPageLoginBTN = page.getByRole('link', { name: 'Signup / Login' });
        this.emailAddressText = page.locator('[data-qa="login-email"]');
        this.passwordText = page.locator('[data-qa="login-password"]');
        this.loginBTN = page.getByRole('button', {name : 'Login'});
        this.errorMSG = page.locator('p', {hasText : 'Your email or password is incorrect!' });
        this.logoutLink = page.getByRole('link', {name : 'Logout'});
    }
    
    async clickTOMainLoginBTN(){
        await this.clickToLocator(this.mainPageLoginBTN);
    }
    async enterEmailAddress(value){
        await this.fillData(this.emailAddressText,value);
    }
    async enterPasswordText(value){
        await this.fillData(this.passwordText,value);
    }
    async clickToLoginBTN(){
        await this.clickToLocator(this.loginBTN);
    }
    async verifyErrorMsg(){
        await this.elementVisible(this.errorMSG);
    }
    async clickToLogoutBTN(){
        await this.clickToLocator(this.logoutLink);
    }

}
module.exports = LoginPage;