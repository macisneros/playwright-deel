import {expect, test} from "@playwright/test";
import {CreateContractPage} from "../resources/pages/create-contracts/CreateContractPage";
import {contracts} from "../resources/models/Contracts";
import {urls} from "../resources/models/Urls";
import {ContractsPage} from "../resources/pages/ContractsPage";
import {FixedRateContractFormularyPage} from "../resources/pages/create-contracts/FixedRateContractFormularyPage";
import {PayAsYouGoContractFormularyPage} from "../resources/pages/create-contracts/PayAsYouGoContractFormularyPage";
import {MilestoneContractFormularyPage} from "../resources/pages/create-contracts/MilestoneContractFormularyPage";

test.describe("Create different types of create-contracts", async () => {

    test.beforeEach(async ({page}) => {
        await page.goto(urls.CREATE_CONTRACT);
    })

    test.afterEach(async ({page}) => {
        await page.close();
    })

    test("Create a Fixed rate contract", async ({page}) => {
        let createContractPage = new CreateContractPage(page);
        let contractsPage = new ContractsPage(page);
        let fixedRateContractFormulayryPage = new FixedRateContractFormularyPage(page);

        await createContractPage.selectFixedRateContract();
        await fixedRateContractFormulayryPage.generateContract(contracts.CONTRACT_PREFIXED_DATE_MODEL);

        await expect(await contractsPage.wasContractCreated(contracts.CONTRACT_PREFIXED_DATE_MODEL), "Prefixed rate contract not created").toBe(true);
    })

    test("Create a Play as you go contract", async ({page}) => {
        let createContractPage = new CreateContractPage(page);
        let contractsPage = new ContractsPage(page);
        let payAsYouGoContractFormularyPage = new PayAsYouGoContractFormularyPage(page)

        await createContractPage.selectAsYouGoContract();
        await payAsYouGoContractFormularyPage.generateContract(contracts.CONTRACT_PLAY_AS_YOU_GO_MODEL);

        await expect(await contractsPage.wasContractCreated(contracts.CONTRACT_PLAY_AS_YOU_GO_MODEL), "Play as you go contract not created").toBe(true);
    })

    test("Create a Milestone contract", async ({page}) => {
        let createContractPage = new CreateContractPage(page);
        let contractsPage = new ContractsPage(page);
        let milestoneContractFormularyPage = new MilestoneContractFormularyPage(page);

        await createContractPage.selectMilestoneContract();
        await milestoneContractFormularyPage.generateContract(contracts.CONTRACT_MILESTONE_MODEL);

        await expect(await contractsPage.wasContractCreated(contracts.CONTRACT_MILESTONE_MODEL), "Milestone contract not created").toBe(true);
    })
})