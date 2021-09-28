export interface LoginParam {
  username: string;
  password: string;
}

export interface Account {
  username?: string;
  id: number;
}

export interface AuthState {
  account: Account;
}
