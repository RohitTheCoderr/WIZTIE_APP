
export interface IAddress {
    fullName: string;
    streetName: string;
    aprtmentOrFloor: string,
    townOrCity: string,
    PhoneNumber: string
}

export interface IAddressWhileUpdate extends IAddress {
    addressId: string
}

export interface IAddressMul {
    userId: string
    address: IAddress[]
}

