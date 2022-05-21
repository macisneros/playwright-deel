import {IMilestoneContract} from "../../utils/interfaces/ContractTypeContract";
import {Locator, Page} from "@playwright/test";
import {GeneralInfoFormulary} from "./GeneralInfoFormulary";
import {Dropdown} from "../../components/Dropdown";

export class MilestoneContractFormularyPage extends GeneralInfoFormulary {

    private readonly txtMilestoneName: Locator;
    private readonly txtAmountPay: Locator;
    private readonly txtDescription: Locator;
    private readonly drpCurrency: Dropdown;

    constructor(page: Page) {
        super(page);
        this.txtMilestoneName = this.page.locator("//input[@data-qa='milestone-title']");
        this.txtAmountPay = this.page.locator("//input[@data-qa='milestone-amount']");
        this.txtDescription = this.page.locator("//textarea[@name='description']");
        this.drpCurrency = new Dropdown(this.page.locator("//div[@data-qa='currency-select']"));
    }

    public async generateContract(contractSpec: IMilestoneContract): Promise<void> {

        await this.fillUpGeneralInfo(contractSpec);
        await this.fillUpPaymentDetails(contractSpec);

        await this.btnNext.click();

        await this.btnCreateContract.click();
    }

    private async fillUpPaymentDetails (contractSpec: IMilestoneContract): Promise<void> {
        await this.drpCurrency.selectOption(contractSpec.currency);

        await this.txtMilestoneName.fill(contractSpec.milestoneName);

        await this.txtDescription.fill(contractSpec.description);

        await this.txtAmountPay.fill(contractSpec.amountPay);

        await this.btnNext.click();
    }
}