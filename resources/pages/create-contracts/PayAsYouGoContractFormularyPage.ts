import {GeneralInfoFormulary} from "./GeneralInfoFormulary";
import {Locator, Page} from "@playwright/test";
import {IPayAsYouGoContract} from "../../utils/interfaces/ContractTypeContract";
import {Dropdown} from "../../components/Dropdown";

export class PayAsYouGoContractFormularyPage extends GeneralInfoFormulary {

    // Rate Fixed Formulary - Payment Detail - fields
    private readonly drpCurrency: Dropdown;
    private readonly txtPaymentRate: Locator;
    private readonly drpPaymentFrecuency: Dropdown;
    private readonly drpFirstPaymentDate: Dropdown;

    constructor(page: Page) {
        super(page);
        this.drpCurrency = new Dropdown(page.locator("//div[@data-qa='currency-select']"));
        this.txtPaymentRate = page.locator("//input[@name='rate']");
        this.drpPaymentFrecuency = new Dropdown(page.locator("//div[@data-qa='work-scale-option' and @class='input-container']"));
        this.drpFirstPaymentDate = new Dropdown(page.locator("//div[@data-qa='selector-first-payment-date']"));
    }

    public async generateContract(contractSpecs: IPayAsYouGoContract): Promise<void> {
        await this.fillUpGeneralInfo(contractSpecs);

        await this.fillUpPaymentDetails(contractSpecs);

        await this.drpFirstPaymentDate.selectByIndex(2);
        await this.btnNext.click();

        await this.btnNext.click();

        await this.btnCreateContract.click();
    }

    private async fillUpPaymentDetails(contractSpecs: IPayAsYouGoContract):Promise<void> {
        await this.drpCurrency.selectOption(contractSpecs.currency);

        await this.txtPaymentRate.fill(contractSpecs.paymentRate);

        await this.drpPaymentFrecuency.selectOption(contractSpecs.paymentFrecuency);

        await this.btnNext.click();
    }
}