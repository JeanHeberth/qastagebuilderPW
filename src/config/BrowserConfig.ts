import {Browser, Page, chromium} from "@playwright/test";

export class BrowserConfig{
    private browser: Browser;
    private page: Page;

    async startBrowser() {
        this.browser = await chromium.launch();
        this.page = await this.browser.newPage();
        return this.page;
    }
}
