import {Page} from "@playwright/test";
import {IFixedRateContract, IGeneralFieldsContract} from "../utils/interfaces/ContractTypeContract";

export class ContractsPage {

    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async wasContractCreated(contractSpec: IGeneralFieldsContract): Promise<boolean> {
        await this.page.waitForSelector(`//h1[text()='${contractSpec.contractName}']`, {timeout: 3000});
        return  await this.page.locator(`//h1[text()='${contractSpec.contractName}']`).count() == 1;
    }
}