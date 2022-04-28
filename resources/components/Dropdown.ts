import {Locator} from "@playwright/test";

export class Dropdown {

    private readonly locator: Locator

    constructor(locator: Locator) {
        this.locator = locator;
    }

    public async selectOption(optionName: string) {
        await this.locator.click();
        await this.locator.locator(`//following::div[text()='${optionName}' and contains(@class, 'option')]`).click();
    }
}