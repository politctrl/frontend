export interface IPost {
  id: number;
  content: string;
  author: IAccount;
}

export interface IAccount {
  id: number;
  externalId: string;
  displayName: string;
  active: boolean;
  service: string;
  owner: IAccountOwner;
}

export interface IAccountOwner {
  id: number;
  displayName: string;
  type: string;
  active: boolean;
}
