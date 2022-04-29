import {Locator, Page} from "@playwright/test";
import {IGeneralFieldsContract} from "../../utils/interfaces/ContractTypeContract";
import {Dropdown} from "../../components/Dropdown";
import {DropDownInput} from "../../components/DropDownInput";
import {Calendar} from "../../components/Calendar";

export class GeneralInfoFormulary {
    protected readonly page: Page;

    // Rate Fixed Formulary - General Info - fields
    protected readonly drpEntity: Locator;
    protected readonly txtContractName: Locator;
    protected readonly drpChooseProvince: Locator;
    protected readonly drpTaxResidence: Locator;
    protected readonly drpJobTitle: Locator;
    protected readonly drpSeniority: Locator;
    protected readonly txtScopeWork: Locator;
    protected readonly cldStartDate: Locator;
    protected readonly btnNext: Locator;
    protected readonly btnCreateContract: Locator;

    constructor(page: Page) {
        this.page = page;
        this.drpEntity = page.locator("//div[@data-qa='select-entity']");
        this.txtContractName = page.locator("//input[@name='name']");
        this.drpJobTitle = page.locator("//input[@name='jobTitle']");
        this.drpTaxResidence = page.locator("//div[@data-qa='contractor-tax-residence' and @class='input-container']");
        this.drpChooseProvince = page.locator("//div[@data-qa='contractor-tax-residence-province']");
        this.drpSeniority = page.locator("//div[@data-qa='selector-seniority-level']");
        this.txtScopeWork = page.locator("//textarea[@name='scope']")
        this.cldStartDate = page.locator("//input[@name='effectiveDate']");
        this.btnNext = page.locator("//button[@data-qa='next']");
        this.btnCreateContract = page.locator("//button[@data-qa='create-contract']");
    }

    protected async fillUpGeneralInfo(contractSpec: IGeneralFieldsContract): Promise<void> {

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
}