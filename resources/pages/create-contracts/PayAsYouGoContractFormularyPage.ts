import {GeneralInfoFormulary} from "./GeneralInfoFormulary";
import {Locator, Page} from "@playwright/test";
import {IFixedRateContract, IPayAsYouGoContract} from "../../utils/interfaces/ContractTypeContract";
import {Dropdown} from "../../components/Dropdown";

export class PayAsYouGoContractFormularyPage extends GeneralInfoFormulary {

    // Rate Fixed Formulary - Payment Detail - fields
    private readonly drpCurrency: Locator;
    private readonly txtPaymentRate: Locator;
    private readonly drpPaymentFrecuency: Locator;
    private readonly drpFirstPaymentDate: Locator;

    constructor(page: Page) {
        super(page);
        this.drpCurrency = page.locator("//div[@data-qa='currency-select']");
        this.txtPaymentRate = page.locator("//input[@name='rate']");
        this.drpPaymentFrecuency = page.locator("//div[@data-qa='work-scale-option' and @class='input-container']");
        this.drpFirstPaymentDate = page.locator("//div[@data-qa='selector-first-payment-date']");
    }

    public async generateContract(contractSpecs: IPayAsYouGoContract): Promise<void> {
        await this.fillUpGeneralInfo(contractSpecs);

        await this.fillUpPaymentDetails(contractSpecs);

        await new Dropdown(this.drpFirstPaymentDate).selectByIndex(2);
        await this.btnNext.click();

        await this.btnNext.click();

        await this.btnCreateContract.click();
    }

    private async fillUpPaymentDetails(contractSpecs: IPayAsYouGoContract):Promise<void> {
        await new Dropdown(this.drpCurrency).selectOption(contractSpecs.currency);

        await this.txtPaymentRate.fill(contractSpecs.paymentRate);

        await new Dropdown(this.drpPaymentFrecuency).selectOption(contractSpecs.paymentFrecuency);

        await this.btnNext.click();
    }
}