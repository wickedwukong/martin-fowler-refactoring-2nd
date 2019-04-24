class Organization {
    constructor(data) {
        this._data = data;
    }

    set name(aString) {
        this._data.name = aString;
    }

    get name() {
        return this._data.name;
    }

}

export const organization = new Organization({name: "Acme Gooseberries", country: "GB"});
export function getOrganization() {
    return organization;
}


