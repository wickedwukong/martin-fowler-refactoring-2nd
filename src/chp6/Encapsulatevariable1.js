let defaultOwner = {firstName: "Martin", lastName: "Fowler"};

export function getDefaultOwner()    {return Object.assign({}, defaultOwner);}
export function setDefaultOwner(arg) {defaultOwner = arg;}
