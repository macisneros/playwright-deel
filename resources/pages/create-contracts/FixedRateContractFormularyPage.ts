import {IFixedRateContract} from "../../utils/interfaces/ContractTypeContract";
import {Dropdown} from "../../components/Dropdown";
import {Locator, Page} from "@playwright/test";
import {GeneralInfoFormulary} from "./GeneralInfoFormulary";
import {Button} from "../../components/Button";
import {Textbox} from "../../components/Textbox";

export class FixedRateContractFormularyPage extends GeneralInfoFormulary {

    // Rate Fixed Formulary - Payment Detail - fields
    private readonly drpCurrency: Dropdown;
    private readonly txtPaymentRate: Textbox;
    private readonly drpPaymentFrecuency: Dropdown;

    // Rate Fixed Formulary - Benefits & Extras - fields
    private readonly btnAddSpecialClause: Button;
    private readonly txtSpecialClause: Textbox;

    constructor(page: Page) {
        super(page);
        this.drpCurrency = new Dropdown(page.locator("//div[@data-qa='currency-select']"));
        this.txtPaymentRate = new Textbox(page.locator("//input[@name='rate']"));
        this.drpPaymentFrecuency = new Dropdown(page.locator("//div[@data-qa='cycle-select' and @class='input-container']"));
        this.txtSpecialClause = new Textbox(page.locator("//textarea"));
        this.btnAddSpecialClause = new Button(page.locator("//button[@data-qa='add-a-special-clause']"));
    }

    public async generateContract(contractSpec: IFixedRateContract): Promise<void> {

        await this.fillUpGeneralInfo(contractSpec);
        await this.fillUpPaymentDetails(contractSpec);

        await this.btnNext.click();

        await this.fillUpBenefitsAndExtras(contractSpec);
        await this.btnCreateContract.click();
    }

    private async fillUpPaymentDetails(contractSpec: IFixedRateContract): Promise<void> {
        await this.drpCurrency.selectOption(contractSpec.currency);

        await this.txtPaymentRate.click();
        await this.txtPaymentRate.fill(contractSpec.paymentRate);

        await this.drpPaymentFrecuency.selectOption(contractSpec.paymentFrecuency);

        await this.btnNext.click();
    }

    private async fillUpBenefitsAndExtras(contractSpec: IFixedRateContract): Promise<void> {
        await this.btnAddSpecialClause.click();

        await this.txtSpecialClause.fill(contractSpec.specialClause)

        await this.btnNext.click();
    }
}