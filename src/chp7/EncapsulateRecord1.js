class Organization {
    constructor(data) {
        this._data = data;
    }
}

export const organization = new Organization({name: "Acme Gooseberries", country: "GB"});

export function getRawDataOfOrganization() {return organization._data;}

