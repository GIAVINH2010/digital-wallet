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
  id: number;
  userId: number;
  assets: Asset[];
}

export interface HomeState {
  wallet: Wallet;
}
