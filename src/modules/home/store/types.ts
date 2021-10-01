export interface Currency {
  _id: string;
  name: string;
  exchangeRate: number;
}

export interface Asset {
  currency: Currency;
  balance: number;
}

export interface Wallet {
  id?: number;
  accountId?: number;
  walletAddress?: string;
  assets?: Asset[];
}
export interface HomeState {
  wallet: Wallet;
}

export interface FundParams {
  fromAdr: number;
  toAdr: number;
  currencyId: string;
  amount: number;
}
