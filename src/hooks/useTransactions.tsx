import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { api } from '../services/api';

interface TransactionsProviderProps {
  children: ReactNode,
};

interface Transaction {
  id: number,
  title: string,
  value: number,
  type: string,
  category: string,
  createdAt: Date,
};

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsContextData {
  transactions: Transaction[],
  createTransaction: (transaction: TransactionInput) => Promise<void>;
};

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData );

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('/transactions')
      .then((response) => setTransactions(response.data.transactions));
    return;
  }, []);

  async function createTransaction(transaction: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transaction,
      createdAt: new Date(),
    });
    const { transaction: newTransaction } = response.data;
    setTransactions([ ...transactions, newTransaction]);
    return;
  };

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
};

export function useTransactions() {
  const context = useContext(TransactionsContext);
  return context;
};