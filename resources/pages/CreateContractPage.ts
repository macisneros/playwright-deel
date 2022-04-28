import {Locator, Page} from "@playwright/test";
import {IContractorTypeContract} from "../utils/interfaces/ContractTypeContract";
import {Dropdown} from "../components/Dropdown";
import {DropDownInput} from "../components/DropDownInput";
import {Calendar} from "../components/Calendar";

export class CreateContractPage {
    private readonly page: Page;

    // Types of contract
    private readonly crdFixedRateContract: Locator;

    // Rate Fixed Formulary - General Info - fields
    private readonly drpEntity: Locator;
    private readonly txtContractName: Locator;
    private readonly drpChooseProvince: Locator;
    private readonly drpTaxResidence: Locator;
    private readonly drpJobTitle: Locator;
    private readonly drpSeniority: Locator;
    private readonly txtScopeWork: Locator;
    private readonly cldStartDate: Locator;
    private readonly btnNext: Locator;

    // Rate Fixed Formulary - Payment Detail - fields
    private readonly drpCurrency: Locator;
    private readonly txtPaymentRate: Locator;
    private readonly drpPaymentFrecuency: Locator;

    // Rate Fixed Formulary - Benefits & Extras - fields
    private readonly btnAddSpecialClause: Locator;
    private readonly txtSpecialClause: Locator;

    // Rate Fixed Formulary - Compliance - fields
    private readonly btnCreateContract: Locator;

    constructor(page: Page) {
        this.page = page;
        this.crdFixedRateContract = page.locator("a[href='/create/fixed']");
        this.drpEntity = page.locator("//div[@data-qa='select-entity']");
        this.txtContractName = page.locator("//input[@name='name']");
        this.drpJobTitle = page.locator("//input[@name='jobTitle']");
        this.drpTaxResidence = page.locator("//div[@data-qa='contractor-tax-residence' and @class='input-container']");
        this.drpChooseProvince = page.locator("//div[@data-qa='contractor-tax-residence-province']");
        this.drpSeniority = page.locator("//div[@data-qa='selector-seniority-level']");
        this.txtScopeWork = page.locator("//textarea[@name='scope']")
        this.cldStartDate = page.locator("//input[@name='effectiveDate']");
        this.btnNext = page.locator("//button[@data-qa='next']");
        this.drpCurrency = page.locator("//div[@data-qa='currency-select']");
        this.txtPaymentRate = page.locator("//input[@name='rate']");
        this.drpPaymentFrecuency = page.locator("//div[@data-qa='cycle-select' and @class='input-container']");
        this.txtSpecialClause = page.locator("//textarea");
        this.btnAddSpecialClause = page.locator("//button[@data-qa='add-a-special-clause']");
        this.btnCreateContract = page.locator("//button[@data-qa='create-contract']");
    }

    public async generateFixedContract(contractSpec: IContractorTypeContract): Promise<void> {
        await this.crdFixedRateContract.click();

        await this.fillUpGeneralInfo(contractSpec);
        await this.fillUpPaymentDetails(contractSpec);

        await this.btnNext.click();

        await this.fillUpBenefitsAndExtras(contractSpec);
        await this.btnCreateContract.click();
        await this.page.waitForTimeout(10000)
    }

    private async fillUpGeneralInfo(contractSpec: IContractorTypeContract): Promise<void> {

        await new Dropdown(this.drpEntity).selectOption(contractSpec.entity)

        await this.txtContractName.fill(contractSpec.contractName);

        await new Dropdown(this.drpTaxResidence).selectOption(contractSpec.taxResidence);

        await new Dropdown(this.drpChooseProvince).selectOption(contractSpec.province);

        await new DropDownInput(this.drpJobTitle).selectOption(contractSpec.jobTitle);

        await new Dropdown(this.drpSeniority).selectOption(contractSpec.seniority);

        await this.txtScopeWork.fill(contractSpec.scopeWork);

        await new Calendar(this.cldStartDate).setDateByIndex(contractSpec.startDate);

        await this.btnNext.click();
    }

    private async fillUpPaymentDetails(contractSpec: IContractorTypeContract): Promise<void> {
        await new Dropdown(this.drpCurrency).selectOption(contractSpec.currency);

        await this.txtPaymentRate.click();
        await this.txtPaymentRate.fill(contractSpec.paymentRate);

        await new Dropdown(this.drpPaymentFrecuency).selectOption(contractSpec.paymentFrecuency);

        await this.btnNext.click();
    }

    private async fillUpBenefitsAndExtras(contractSpec: IContractorTypeContract): Promise<void> {
        await this.btnAddSpecialClause.click();

        await this.txtSpecialClause.fill(contractSpec.specialClause)

        await this.btnNext.click();
    }
}