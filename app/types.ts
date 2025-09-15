export type AccountType = 'loan' | 'credit_card' | 'savings' | 'checking' | 'investment';

export interface Account {
  id: string;
  type: AccountType;
  name: string;
  balance: number;
  apr?: number;
  minPayment?: number;
  goalTarget?: number;
  monthlyDirectDeposit?: number;
}

export interface RecentActivity {
  id: string;
  description: string;
  amount: number;
  date: string;
  type: 'debit' | 'credit';
}
