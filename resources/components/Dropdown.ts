import {Locator} from "@playwright/test";
import {BaseComponent} from "./BaseComponent";

export class Dropdown extends BaseComponent{

    constructor(locator: Locator) {
        super(locator);
    }

    public async selectOption(optionName: string): Promise<void> {
        await this.locator.click();
        await this.locator.locator(`//following::div[text()='${optionName}' and contains(@class, 'option')]`).click();
    }

    public async selectByIndex(index: number): Promise<void> {
        await this.locator.click();
        await this.locator.locator(`(//following::div[contains(@id, 'react-select')])[${index}]`).click();
    }
}