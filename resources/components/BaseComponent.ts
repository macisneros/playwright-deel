import {Locator} from "@playwright/test";

export abstract class BaseComponent {

    protected readonly locator: Locator;

    constructor(locator: Locator) {
        this.locator = locator;
    }
}