const { tests, expect } = require('@playwright/test');
const logger = require('../utils/Logger');

class BasePage {
    constructor(page) {
        this.page = page;
    }
    async navigateToUrl(Url) {
        await this.page.goto(Url);
        logger.info("User Navigation successfully" + Url);
    }

    async verifyNavigationPageTitle(title) {
        await expect(this.page).toHaveTitle(title);
        logger.info('Navigation done, title matched !!')
    }

    async fillData(locator, value) {
        await locator.fill(value);
        logger.info(value + " is entered in text field " + locator);
    }
    async clickToLocator(locator) {
        await locator.click();
        logger.info(locator + " is clicked !!");
    }
    async getText(locator) {
        return await locator.textContent();
    }
    async elementVisible(locator) {
        await locator.isVisible();
        logger.info(locator + " is visible");
    }
    async selectDropDown(locator, input) {
        await locator.selectOption(input);
        logger.info(input + " selected !!");
    }
    async clickToCheckBox(locator) {
        if (!(await locator.isChecked())) {
            await locator.check();
            logger.info("Checkbox selected successfully.");
        } else {
            logger.info("Checkbox was already selected.");
        }
    }
    async uploadFile(locator, filePath){
        await locator.setInputFiles(filePath);
        logger.info("File Uploaded Successfully !! " + locator);

    }

}
module.exports = BasePage;