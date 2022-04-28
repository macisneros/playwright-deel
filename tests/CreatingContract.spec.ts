import {expect, test} from "@playwright/test";
import {CreateContractPage} from "../resources/pages/CreateContractPage";
import {contracts} from "../resources/models/Contracts";
import {urls} from "../resources/models/Urls";
import {ContractsPage} from "../resources/pages/ContractsPage";
import {allure} from "allure-playwright";

test.beforeEach(async ({page}) => {
    await page.goto(urls.CREATE_CONTRACT);
})

test.afterEach(async ({page}) => {
    await page.close();
})

test.describe("Create different types of contracts", async () => {

    test("Create a Fixed rate contract", async ({page}) => {
        let createContractPage = new CreateContractPage(page);
        let contractsPage = new ContractsPage(page);

        await createContractPage.generateFixedContract(contracts.CONTRACT_PREFIXED_DATE_MODEL);

        await expect(await contractsPage.wasContractCreated(contracts.CONTRACT_PREFIXED_DATE_MODEL), "Prefixed rate contract not created").toBe(false);
    })

    test("Create a Play as you go contract", async ({page}) => {
        let createContractPage = new CreateContractPage(page);
        let contractsPage = new ContractsPage(page);

        await createContractPage.generateFixedContract(contracts.CONTRACT_PLAY_AS_YOU_GO_MODEL);

        await expect(await contractsPage.wasContractCreated(contracts.CONTRACT_PLAY_AS_YOU_GO_MODEL), "Play as you go contract not created").toBe(true);
    })

    test("Create a Milestone contract", async ({page}) => {
        let createContractPage = new CreateContractPage(page);
        let contractsPage = new ContractsPage(page);

        await createContractPage.generateFixedContract(contracts.CONTRACT_MILESTONE_MODEL);

        await expect(await contractsPage.wasContractCreated(contracts.CONTRACT_MILESTONE_MODEL), "Milestone contract not created").toBe(true);
    })
})