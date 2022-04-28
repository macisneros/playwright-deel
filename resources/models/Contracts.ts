import {IContractorTypeContract} from "../utils/interfaces/ContractTypeContract";

export const contracts: IContractsList = {
    CONTRACT_PREFIXED_DATE_MODEL: {
        contractName: "Prefixed Name Contract",
        entity: "Test plan",
        jobTitle: "Academic Advisor",
        province: "Colorado",
        startDate: -1,
        scopeWork: "Doing an example",
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
        scopeWork: "Doing an example",
        seniority: "Not applicable",
        taxResidence: "United States",
        currency: "GBP - British Pound",
        paymentRate: "1000",
        paymentFrecuency: "Weekly",
        specialClause: "Test clause"
    },
    CONTRACT_MILESTONE_MODEL: {
        contractName: "Milestone Name Contract",
        entity: "Test plan",
        jobTitle: "Academic Advisor",
        province: "Colorado",
        startDate: -1,
        scopeWork: "Doing an example",
        seniority: "Not applicable",
        taxResidence: "United States",
        currency: "GBP - British Pound",
        paymentRate: "1000",
        paymentFrecuency: "Weekly",
        specialClause: "Test clause"
    }
}

interface IContractsList {
    readonly CONTRACT_PREFIXED_DATE_MODEL: IContractorTypeContract,
    readonly CONTRACT_PLAY_AS_YOU_GO_MODEL: IContractorTypeContract,
    readonly CONTRACT_MILESTONE_MODEL: IContractorTypeContract
}