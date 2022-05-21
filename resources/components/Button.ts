import {BaseComponent} from "./BaseComponent";
import {Locator} from "@playwright/test";

export class Button extends BaseComponent {

    constructor(locator: Locator) {
        super(locator);
    }

    public async click(options?: any): Promise<void> {
        await this.locator.click(options);
    }

}