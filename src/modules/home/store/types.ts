export interface Currency {
  id: number;
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
