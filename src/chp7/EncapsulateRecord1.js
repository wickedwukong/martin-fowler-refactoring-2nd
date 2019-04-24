class Organization {
    constructor(data) {
        this._data = data;
    }

    set name(aString) {this._data.name = aString;}
}

export const organization = new Organization({name: "Acme Gooseberries", country: "GB"});

export function getRawDataOfOrganization() {return organization._data;}

