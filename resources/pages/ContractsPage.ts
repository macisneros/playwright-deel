import {Page} from "@playwright/test";
import {IContractorTypeContract} from "../utils/interfaces/ContractTypeContract";

export class ContractsPage {

    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async wasContractCreated(contractSpec: IContractorTypeContract): Promise<boolean> {
        return  await this.page.locator(`//h1[text()='${contractSpec.contractName}']`).count() == 1;
    }
}