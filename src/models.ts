export interface IPost {
  id: number;
  content: string;
  author: IAccount;
  service: string;
  externalId: string;
  createTimestamp: string;
  deleted: boolean;
  deleteTimestamp: string | null;
}

export interface IEmbed {
  id: number;
  name: string | null;
  url: string;
  type: string;
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