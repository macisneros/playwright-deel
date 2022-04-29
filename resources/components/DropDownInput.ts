import {Locator} from "@playwright/test";
import {BaseComponent} from "./BaseComponent";

export class DropDownInput extends BaseComponent{

    constructor(locator: Locator) {
        super(locator);
    }

    public async selectOption(optionName: string) {
        await this.locator.click();
        await this.locator.locator(`//following::p[text()='${optionName}']`).click();
    }
}