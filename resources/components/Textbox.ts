import {Locator} from "@playwright/test";
import {BaseComponent} from "./BaseComponent";

export class Textbox extends BaseComponent {

    constructor(locator: Locator) {
        super(locator);
    }

    public async fill(text: string, options?: any): Promise<void> {
        await this.locator.fill(text, options)
    }

    public async click(options?: any): Promise<void> {
        await this.locator.click(options);
    }
}