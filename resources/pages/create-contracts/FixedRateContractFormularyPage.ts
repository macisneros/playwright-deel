import {IFixedRateContract} from "../../utils/interfaces/ContractTypeContract";
import {Dropdown} from "../../components/Dropdown";
import {DropDownInput} from "../../components/DropDownInput";
import {Calendar} from "../../components/Calendar";
import {Locator, Page} from "@playwright/test";
import {GeneralInfoFormulary} from "./GeneralInfoFormulary";

export class FixedRateContractFormularyPage extends GeneralInfoFormulary {

    // Rate Fixed Formulary - Payment Detail - fields
    private readonly drpCurrency: Locator;
    private readonly txtPaymentRate: Locator;
    private readonly drpPaymentFrecuency: Locator;

    // Rate Fixed Formulary - Benefits & Extras - fields
    private readonly btnAddSpecialClause: Locator;
    private readonly txtSpecialClause: Locator;

    constructor(page: Page) {
        super(page);
        this.drpCurrency = page.locator("//div[@data-qa='currency-select']");
        this.txtPaymentRate = page.locator("//input[@name='rate']");
        this.drpPaymentFrecuency = page.locator("//div[@data-qa='cycle-select' and @class='input-container']");
        this.txtSpecialClause = page.locator("//textarea");
        this.btnAddSpecialClause = page.locator("//button[@data-qa='add-a-special-clause']");
    }

    public async generateContract(contractSpec: IFixedRateContract): Promise<void> {

        await this.fillUpGeneralInfo(contractSpec);
        await this.fillUpPaymentDetails(contractSpec);

        await this.btnNext.click();

        await this.fillUpBenefitsAndExtras(contractSpec);
        await this.btnCreateContract.click();
    }

    private async fillUpPaymentDetails(contractSpec: IFixedRateContract): Promise<void> {
        await new Dropdown(this.drpCurrency).selectOption(contractSpec.currency);

        await this.txtPaymentRate.click();
        await this.txtPaymentRate.fill(contractSpec.paymentRate);

        await new Dropdown(this.drpPaymentFrecuency).selectOption(contractSpec.paymentFrecuency);

        await this.btnNext.click();
    }

    private async fillUpBenefitsAndExtras(contractSpec: IFixedRateContract): Promise<void> {
        await this.btnAddSpecialClause.click();

        await this.txtSpecialClause.fill(contractSpec.specialClause)

        await this.btnNext.click();
    }
}