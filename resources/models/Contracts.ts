import {IFixedRateContract, IMilestoneContract, IPayAsYouGoContract} from "../utils/interfaces/ContractTypeContract";

export const contracts: IContractsList = {
    CONTRACT_PREFIXED_DATE_MODEL: {
        contractName: "Prefixed Name Contract",
        entity: "Test plan",
        jobTitle: "Academic Advisor",
        province: "Colorado",
        startDate: -1,
        scopeWork: "Doing an example for prefixed",
        seniority: "Not applicable",
        taxResidence: "United States",
        currency: "GBP - British Pound",
        paymentRate: "1000",
        paymentFrecuency: "Weekly",
        specialClause: "Test clause"
    },
    CONTRACT_PLAY_AS_YOU_GO_MODEL: {
        contractName: "Play as you go Name Contract",
        entity: "Test plan",
        jobTitle: "Academic Advisor",
        province: "Colorado",
        startDate: -1,
        scopeWork: "Doing an example for play as you go",
        seniority: "Not applicable",
        taxResidence: "United States",
        currency: "GBP - British Pound",
        paymentRate: "2000",
        paymentFrecuency: "Day",
    },
    CONTRACT_MILESTONE_MODEL: {
        contractName: "Milestone Name Contract",
        entity: "Test plan",
        jobTitle: "Academic Advisor",
        province: "Colorado",
        startDate: -1,
        scopeWork: "Doing an example for milestone",
        seniority: "Not applicable",
        taxResidence: "United States",
        currency: "GBP - British Pound",
        amountPay: "3000",
        milestoneName: "Milestone Test Name",
        description: "Test Description",
    }
}

interface IContractsList {
    readonly CONTRACT_PREFIXED_DATE_MODEL: IFixedRateContract,
    readonly CONTRACT_PLAY_AS_YOU_GO_MODEL: IPayAsYouGoContract,
    readonly CONTRACT_MILESTONE_MODEL: IMilestoneContract
}