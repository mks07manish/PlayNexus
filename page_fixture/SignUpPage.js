const { test, expect } = require('@playwright/test');
const logger = require('../utils/Logger');
const BasePage = require('../page_fixture/BasePage');

class SignUpPage extends BasePage {
    constructor(page) {
        super(page);
        this.mainPageLoginBTN = page.getByRole('link', { name: 'Signup / Login' });
        this.nameText = page.getByPlaceholder('Name');
        this.emailAddressText = page.locator('[data-qa="signup-email"]');
        this.signUpBtn = page.getByRole('button', { name: 'Signup' });
        this.signUpPage = page.getByRole('h2', { name: 'Enter Account Information' });
        this.misterRadioBTN = page.getByRole('radio', { name: 'Mr.' });
        this.password = page.locator('#password');
        this.days = page.locator('#days');
        this.month = page.locator("#months");
        this.year = page.locator("#years");
        this.newsletterCheckbox = page.locator('#newsletter');
        this.optinCheckBox = page.locator('#optin');
        this.firstName = page.locator('#first_name');
        this.lastName = page.locator('#last_name');
        this.company = page.locator('#company');
        this.addressOne = page.locator('#address1');
        this.addressTwo = page.locator('#address2');
        this.country = page.locator('#country');
        this.state = page.locator('#state');
        this.city = page.locator('#city');
        this.zipcode = page.locator("#zipcode");
        this.mobileNumber = page.locator('#mobile_number');
        this.createAccountBTN = page.locator('[data-qa="create-account"]');
        this.accountCreatedMsg = page.locator('[data-qa="account-created"]');
        this.continueBTN = page.locator('[data-qa="continue-button"]');
        this.deleteLink = page.getByRole('link',{name : 'Delete Account'});
        this.accountDeletedMsg = page.locator('[data-qa="account-deleted"]');
        this.errorMsg = page.locator('p',{hasText : 'Email Address already exist!'});
    }

    async clickToLoginBTN() {
        await this.clickToLocator(this.mainPageLoginBTN);
    }

    async fillNameText(value) {
        await this.fillData(this.nameText, value);
    }

    async fillEmailAddress(value) {
        await this.fillData(this.emailAddressText, value);
    }
    async clickToSignUpBTN() {
        await this.clickToLocator(this.signUpBtn);
    }
    async verifySignUpPage(){
        await this.elementVisible(this.signUpPage);
    }
    async clickOnMisterRadioBTN() {
        await this.clickToLocator(this.misterRadioBTN);
    }
    async enterPassword(value) {
        await this.fillData(this.password, value);
    }
    async enterDOB(days, month, year) {
        await this.selectDropDown(this.days, days);
        await this.selectDropDown(this.month, month);
        await this.selectDropDown(this.year, year);
    }
    async clickToNewsCheckBox() {
        await this.clickToCheckBox(this.newsletterCheckbox);
    }
    async clickToOptinCheckBox() {
        await this.clickToCheckBox(this.optinCheckBox);
    }
    async enterfirstName(firstName) {
        await this.fillData(this.firstName, firstName);
    }
    async enterLastName(lastName) {
        await this.fillData(this.lastName, lastName);
    }
    async enterCompany(comapny) {
        await this.fillData(this.company, comapny);
    }
    async enterAddress(addressOne, addressTwo, country, state, city, zipcode) {
        await this.fillData(this.addressOne, addressOne);
        await this.fillData(this.addressTwo, addressTwo);
        await this.selectDropDown(this.country, country);
        await this.fillData(this.state, state);
        await this.fillData(this.city, city);
        await this.fillData(this.zipcode, zipcode);
    }

    async enterMobileNumber(value) {
        await this.fillData(this.mobileNumber, value);
    }
    async clickToCreateAccountBTN() {
        await this.clickToLocator(this.createAccountBTN);
    }

    async verifyAccountCreated(){
        await expect(this.accountCreatedMsg).toHaveText('Account Created!');
        logger.info('Verified !!');
    }
    async clickOnContinueBTN(){
        await this.clickToLocator(this.continueBTN);
    }
    async clickOnDeleteLink(){
        await this.clickToLocator(this.deleteLink);
    }
    async verifyAccountDeletedMsg(){
        await expect(this.accountDeletedMsg).toHaveText('Account Deleted!');
        logger.info('Verified MSG!!');
    }
    async verifyErrorMessage(){
        await this.elementVisible(this.errorMsg);
    }
}
module.exports = SignUpPage;
    