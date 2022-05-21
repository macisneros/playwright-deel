import {Locator, Page} from "@playwright/test";
import {IGeneralFieldsContract} from "../../utils/interfaces/ContractTypeContract";
import {Dropdown} from "../../components/Dropdown";
import {Calendar} from "../../components/Calendar";
import {Button} from "../../components/Button";

export class GeneralInfoFormulary {
    protected readonly page: Page;

    // Rate Fixed Formulary - General Info - fields
    protected readonly drpEntity: Dropdown;
    protected readonly txtContractName: Locator;
    protected readonly drpChooseProvince: Dropdown;
    protected readonly drpTaxResidence: Dropdown;
    protected readonly drpJobTitle: Dropdown;
    protected readonly drpSeniority: Dropdown;
    protected readonly txtScopeWork: Locator;
    protected readonly cldStartDate: Calendar;
    protected readonly btnNext: Button;
    protected readonly btnCreateContract: Button;

    constructor(page: Page) {
        this.page = page;
        this.drpEntity = new Dropdown(page.locator("//div[@data-qa='select-entity']"));
        this.txtContractName = page.locator("//input[@name='name']");
        this.drpJobTitle = new Dropdown(page.locator("//input[@name='jobTitle']"));
        this.drpTaxResidence = new Dropdown(page.locator("//div[@data-qa='contractor-tax-residence' and @class='input-container']"));
        this.drpChooseProvince = new Dropdown(page.locator("//div[@data-qa='contractor-tax-residence-province']"));
        this.drpSeniority = new Dropdown(page.locator("//div[@data-qa='selector-seniority-level']"));
        this.txtScopeWork = page.locator("//textarea[@name='scope']")
        this.cldStartDate = new Calendar(page.locator("//input[@name='effectiveDate']"));
        this.btnNext = new Button(page.locator("//button[@data-qa='next']"));
        this.btnCreateContract = new Button(page.locator("//button[@data-qa='create-contract']"));
    }

    protected async fillUpGeneralInfo(contractSpec: IGeneralFieldsContract): Promise<void> {

        await this.drpEntity.selectOption(contractSpec.entity)

        await this.txtContractName.fill(contractSpec.contractName);

        await this.drpTaxResidence.selectOption(contractSpec.taxResidence);

        await this.drpChooseProvince.selectOption(contractSpec.province);

        await this.drpJobTitle.selectOption(contractSpec.jobTitle);

        await this.drpSeniority.selectOption(contractSpec.seniority);

        await this.txtScopeWork.fill(contractSpec.scopeWork);

        await this.cldStartDate.setDateByIndex(contractSpec.startDate);

        await this.btnNext.click();
    }
}