import {Locator} from "@playwright/test";

export class Calendar {

    private readonly locator: Locator;

    constructor(locator: Locator) {
        this.locator = locator;
    }

    public async setDateByIndex(index: number) {
        let date = new Date();
        date.setDate(date.getDate() + index);

        await this.locator.click();
        await this.locator.locator(`//following::button[contains(text(), '${date.getDate()}')]`)
    }
}