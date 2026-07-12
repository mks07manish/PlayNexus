const {test,expect} = require('@playwright/test');
const BasePage = require('../page_fixture/BasePage');

class TestCasePage extends BasePage{
    constructor(page){
        super(page);
        this.testcaseLink = page.locator('a[href="/test_cases"]').first();
    }
    async clickToTestCaseLink(){
        await this.clickToLocator(this.testcaseLink);
    }
}
module.exports = TestCasePage;