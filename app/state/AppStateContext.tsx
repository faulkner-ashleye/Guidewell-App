'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'
import { Account } from '../types'

interface AppStateContextType {
  accounts: Account[]
  setAccounts: (accounts: Account[]) => void
}

const AppStateContext = createContext<AppStateContextType | undefined>(undefined)

// Initial data
const initialAccounts: Account[] = [
  {
    id: '1',
    type: 'checking',
    name: 'Checking',
    balance: 1800,
  },
  {
    id: '2',
    type: 'savings',
    name: 'Wedding Fund',
    balance: 3200,
    goalTarget: 15000,
  },
  {
    id: '3',
    type: 'loan',
    name: 'Student Loan',
    balance: 24000,
    apr: 4.5,
    minPayment: 120,
  },
]

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [accounts, setAccounts] = useState<Account[]>(initialAccounts)

  return (
    <AppStateContext.Provider value={{ accounts, setAccounts }}>
      {children}
    </AppStateContext.Provider>
  )
}

export function useAppState() {
  const context = useContext(AppStateContext)
  if (context === undefined) {
    throw new Error('useAppState must be used within an AppStateProvider')
  }
  return context
}
