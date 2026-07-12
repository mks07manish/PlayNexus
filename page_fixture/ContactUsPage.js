const { test, expect } = require('@playwright/test');
const BasePage = require('./BasePage');

class ContactUsPage extends BasePage {
    constructor(page) {
        super(page);
        this.contactUsLink = page.getByRole('link', { name: ' Contact us' });
        this.nameText = page.getByPlaceholder('Name');
        this.emailAddressText = page.locator('[data-qa="email"]');
        this.subjectText = page.getByPlaceholder('Subject');
        this.messageText = page.locator('#message');
        this.submitBTN = page.locator('[data-qa="submit-button"]');
        this.uploadFileURL = page.locator('[name="upload_file"]');
        this.successMsg = page.locator('div', { hasText: 'Success! Your details have been submitted successfully.' });
        this.homePageBTN = page.getByRole('link', { name: ' Home' });
    }

    async clickTOContactUsLink() {
        await this.clickToLocator(this.contactUsLink);
    }
    async enterNameText(value) {
        await this.fillData(this.nameText, value);
    }
    async enterEmailAddressText(value) {
        await this.fillData(this.emailAddressText, value);
    }
    async enterSubjectText(value) {
        await this.fillData(this.subjectText, value);
    }
    async enterMessageText(value) {
        await this.fillData(this.messageText, value);
    }
    async uploadFilePage(path) {
        await this.uploadFile(this.uploadFileURL, path);
    }
    async clickTOSubmitBTN() {
        this.page.once('dialog', async dialog => {
            expect(dialog.message()).toBe('Press OK to proceed!');
            await dialog.accept();
        });
        await this.clickToLocator(this.submitBTN);
    }
    async verifySuccessMessage() {
        await this.elementVisible(this.successMsg);
    }
    async clickToHomeBTN(){
        await this.clickToLocator(this.homePageBTN);
    }
}
module.exports = ContactUsPage;