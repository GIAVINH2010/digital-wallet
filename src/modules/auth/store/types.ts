export interface LoginParams {
  username: string;
  password: string;
}
export interface RegisterParams extends LoginParams {
  email: string;
}
export interface Account {
  username?: string;
  id: number;
}

export interface AuthState {
  account: Account;
}
