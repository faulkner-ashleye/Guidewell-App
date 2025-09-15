'use client'

import { AppStateProvider, useAppState } from './state/AppStateContext'
import { RecentActivity } from './types'

// Mock recent activity data
const recentActivity: RecentActivity[] = [
  {
    id: '1',
    description: 'Target',
    amount: -65,
    date: '2024-01-15',
    type: 'debit',
  },
  {
    id: '2',
    description: 'Rent',
    amount: -800,
    date: '2024-01-14',
    type: 'debit',
  },
  {
    id: '3',
    description: 'Student Loan',
    amount: -120,
    date: '2024-01-13',
    type: 'debit',
  },
]

function HomeContent() {
  const { accounts } = useAppState()
  
  const checkingAccount = accounts.find(acc => acc.type === 'checking')
  const weddingFund = accounts.find(acc => acc.name === 'Wedding Fund')

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back</h1>
      </div>

      {/* Account Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Checking Balance Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900">Checking Balance</h3>
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 text-sm font-medium">$</span>
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900">
            ${checkingAccount?.balance.toLocaleString()}
          </p>
        </div>

        {/* Wedding Fund Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900">Wedding Fund</h3>
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 text-sm font-medium">💍</span>
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900">
            ${weddingFund?.balance.toLocaleString()}
          </p>
          <p className="text-sm text-gray-500 mt-1">
            of ${weddingFund?.goalTarget?.toLocaleString()} goal
          </p>
          {weddingFund?.goalTarget && (
            <div className="mt-3">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-500 h-2 rounded-full" 
                  style={{ 
                    width: `${Math.min((weddingFund.balance / weddingFund.goalTarget) * 100, 100)}%` 
                  }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {Math.round((weddingFund.balance / weddingFund.goalTarget) * 100)}% complete
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-3">
                <div className={`w-2 h-2 rounded-full ${
                  activity.type === 'debit' ? 'bg-red-500' : 'bg-green-500'
                }`}></div>
                <div>
                  <p className="font-medium text-gray-900">{activity.description}</p>
                  <p className="text-sm text-gray-500">{activity.date}</p>
                </div>
              </div>
              <p className={`font-semibold ${
                activity.type === 'debit' ? 'text-red-600' : 'text-green-600'
              }`}>
                ${Math.abs(activity.amount)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <AppStateProvider>
      <HomeContent />
    </AppStateProvider>
  )
}
