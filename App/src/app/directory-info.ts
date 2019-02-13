export class Permissions {
  read: boolean;
  write: boolean;
  execute: boolean;
}

export class Attributes {
  owner: Permissions;
  group: Permissions;
  individual: Permissions;
}


export class DirectoryInfo {

  constructor() { }
  path: string;
  size: string;
  attributes: Attributes;
}

export class CustomPath {

  constructor() { }
  body: string;
}
