import {Locator} from "@playwright/test";
import {BaseComponent} from "./BaseComponent";

export class Calendar extends BaseComponent{

    constructor(locator: Locator) {
        super(locator);
    }

    public async setDateByIndex(index: number) {
        let date = new Date();
        date.setDate(date.getDate() + index);

        await this.locator.click();
        await this.locator.locator(`//following::button[contains(text(), '${date.getDate()}')]`)
    }
}