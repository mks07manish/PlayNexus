const { test, expect } = require("@playwright/test");
const SignUpPage = require('../page_fixture/SignUpPage');
const LoginPage = require('../page_fixture/LoginPage');
const ContactUsPage = require('../page_fixture/ContactUsPage');
const TestCasePage = require("../page_fixture/TestCasePage");

test('Register User', async ({ page }) => {
    const signuppage = new SignUpPage(page);
    await signuppage.navigateToUrl('https://automationexercise.com/');
    await signuppage.verifyNavigationPageTitle('Automation Exercise');
    await signuppage.clickToLoginBTN();
    await signuppage.verifyNavigationPageTitle('Automation Exercise - Signup / Login');
    await signuppage.fillNameText('manis sonkar');
    await signuppage.fillEmailAddress('manish111@gmail.com');
    await signuppage.clickToSignUpBTN();
    await signuppage.verifySignUpPage();
    await signuppage.clickOnMisterRadioBTN();
    await signuppage.enterPassword('Manish@1234');
    await signuppage.enterDOB('20', '7', '2002');
    await signuppage.clickToNewsCheckBox();
    await signuppage.clickToOptinCheckBox();
    await signuppage.enterfirstName('Manish');
    await signuppage.enterLastName('Sonkar');
    await signuppage.enterCompany('nucleus');
    await signuppage.enterAddress('ABC', 'EFG', 'India', 'XYZ', 'ABC', '221000');
    await signuppage.enterMobileNumber('1234567890');
    await signuppage.clickToCreateAccountBTN();
    await signuppage.verifyAccountCreated();
    await signuppage.clickOnContinueBTN();
    await signuppage.clickOnDeleteLink();
    await signuppage.verifyAccountDeletedMsg();
    await signuppage.clickOnContinueBTN();
    await signuppage.verifyNavigationPageTitle('Automation Exercise');
});

test('Login User with incorrect email and password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToUrl('https://automationexercise.com/');
    await loginPage.verifyNavigationPageTitle('Automation Exercise');
    await loginPage.clickTOMainLoginBTN();
    await loginPage.verifyNavigationPageTitle('Automation Exercise - Signup / Login');
    await loginPage.enterEmailAddress('manish@gmail.com');
    await loginPage.enterPasswordText('Manish@123');
    await loginPage.clickToLoginBTN();
    await loginPage.verifyErrorMsg();
});

test('Logout User', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateToUrl('https://automationexercise.com/');
    await loginPage.verifyNavigationPageTitle('Automation Exercise');
    await loginPage.clickTOMainLoginBTN();
    await loginPage.verifyNavigationPageTitle('Automation Exercise - Signup / Login');
    await loginPage.enterEmailAddress('manish321@gmail.com');
    await loginPage.enterPasswordText('Manish@1234');
    await loginPage.clickToLoginBTN();
    await loginPage.verifyNavigationPageTitle('Automation Exercise');
    await loginPage.clickToLogoutBTN();
    await loginPage.verifyNavigationPageTitle('Automation Exercise - Signup / Login');
});

test('Register User with existing email', async ({page}) =>{
    const signuppage = new SignUpPage(page);
    await signuppage.navigateToUrl('https://automationexercise.com/');
    await signuppage.verifyNavigationPageTitle('Automation Exercise');
    await signuppage.clickToLoginBTN();
    await signuppage.verifyNavigationPageTitle('Automation Exercise - Signup / Login');
    await signuppage.fillNameText('manis sonkar');
    await signuppage.fillEmailAddress('manish321@gmail.com');
    await signuppage.clickToSignUpBTN();
    await signuppage.verifyErrorMessage();
});

test('Contact Us Form', async({page}) => {
    const contactUsPage = new ContactUsPage(page);
    await contactUsPage.navigateToUrl('https://automationexercise.com/');
    await contactUsPage.verifyNavigationPageTitle('Automation Exercise');
    await contactUsPage.clickTOContactUsLink();
    await contactUsPage.verifyNavigationPageTitle('Automation Exercise - Contact Us');
    await contactUsPage.enterNameText('Manish');
    await contactUsPage.enterEmailAddressText('manish@gmail.com');
    await contactUsPage.enterSubjectText('Subject');
    await contactUsPage.enterMessageText('Message');
    await contactUsPage.uploadFilePage('reports/execution.log');
    await contactUsPage.clickTOSubmitBTN();
    await contactUsPage.verifySuccessMessage();
    await contactUsPage.clickToHomeBTN();
    await contactUsPage.verifyNavigationPageTitle('Automation Exercise');
});
test.only('Verify Test Cases Page', async ({page}) =>{
    const testCasePage = new TestCasePage(page);
    await testCasePage.navigateToUrl('https://automationexercise.com/');
    await testCasePage.verifyNavigationPageTitle('Automation Exercise');
    await testCasePage.clickToTestCaseLink();
    await testCasePage.verifyNavigationPageTitle('Automation Practice Website for UI Testing - Test Cases');
});
