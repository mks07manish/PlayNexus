const {test, expect} = require('@playwright/test');
const BasePage = require('../page_fixture/BasePage');

class ProductPage extends BasePage{
    constructor(page){
        super(page);
        this.productPageLink = page.getByRole('link',{name : ' Products'});
        this.viewProductLink = page.getByRole('link', {name : 'View Product'}).first();
        this.productName = page.locator('.product-information h2');
        this.category = page.locator('.product-information p').filter({hasText:'Category:'});
        this.price = page.locator('.product-information span span');
        this.availability = page.locator('.product-information p').filter({hasText : 'Availability:'});
        this.condition = page.locator('.product-information p').filter({hasText : 'Condition:'});
        this.brand = page.locator('.product-information p').filter({hasText : 'Brand:'});
        this.searchPrductTxt = page.locator('#search_product');
        this.searchProductBTN= page.locator('#submit_search');
        this.searchProductVisible = page.locator('.product-image-wrapper');
    }
    async clickTOProductPageLink(){
        await this.clickToLocator(this.productPageLink);
    }
    async clickToViewProductLink(){
        await this.clickToLocator(this.viewProductLink);
    }
    async verifyProductDetails(){
        await this.elementVisible(this.productName);
        await this.elementVisible(this.category);
        await expect(this.price).toContainText('Rs.');
        await this.elementVisible(this.availability);
        await this.elementVisible(this.condition);
        await this.elementVisible(this.brand);
    }
    async searchProduct(value){
        await this.fillData(this.searchPrductTxt,value);
        await this.clickToLocator(this.searchProductBTN);
    }
    async verifySearchProduct(){
        await expect(this.searchProductVisible.first()).toBeVisible();
        const count = await this.searchProductVisible.count();
        await expect(count).toBeGreaterThan(0);
    }
}
module.exports=ProductPage;