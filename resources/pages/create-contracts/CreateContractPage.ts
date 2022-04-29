import {Locator, Page} from "@playwright/test";

export class CreateContractPage {
    private readonly page: Page;

    private readonly crdFixedRateContract: Locator;
    private readonly crdMilestoneContract: Locator;
    private readonly crdPayAsYouGoContract: Locator;

    constructor(page: Page) {
        this.page = page;
        this.crdFixedRateContract = page.locator("a[href='/create/fixed']");
        this.crdMilestoneContract = page.locator("a[href='/create/milestone']");
        this.crdPayAsYouGoContract = page.locator("a[href='/create/pay-as-you-go']");
    }

    public async selectFixedRateContract(): Promise<void> {
        await this.crdFixedRateContract.click();
    }

    public async selectMilestoneContract(): Promise<void> {
        await this.crdMilestoneContract.click();
    }

    public async selectAsYouGoContract(): Promise<void> {
        await this.crdPayAsYouGoContract.click();
    }
}