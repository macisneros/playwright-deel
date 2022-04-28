import {Locator} from "@playwright/test";

export class DropDownInput {

    private readonly locator: Locator

    constructor(locator: Locator) {
        this.locator = locator;
    }

    public async selectOption(optionName: string) {
       await this.locator.click();
        await this.locator.locator(`//following::p[text()='${optionName}']`).click();
    }
}