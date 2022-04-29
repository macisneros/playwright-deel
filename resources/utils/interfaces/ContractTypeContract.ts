export interface IFixedRateContract extends IGeneralFieldsContract {
    readonly paymentRate: string,
    readonly paymentFrecuency: string,
    readonly specialClause: string
}

export interface IMilestoneContract extends IGeneralFieldsContract {
    readonly milestoneName: string,
    readonly description: string,
    readonly amountPay: string,
}

export interface IPayAsYouGoContract extends IGeneralFieldsContract {
    readonly paymentRate: string,
    readonly paymentFrecuency: string
}

export interface IGeneralFieldsContract {
    readonly currency: string,
    readonly entity: string,
    readonly contractName: string,
    readonly taxResidence: string,
    readonly province: string,
    readonly jobTitle: string,
    readonly seniority: string,
    readonly scopeWork: string,
    readonly startDate: number,
}