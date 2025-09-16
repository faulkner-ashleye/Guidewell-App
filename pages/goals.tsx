import Head from 'next/head'
import BottomNav from '../app/components/BottomNav'

export default function Goals() {
  return (
    <>
      <Head>
        <title>Goals - Financial App</title>
        <meta name="description" content="Set and track your financial goals" />
      </Head>
      
      <div className="min-h-screen bg-gray-50 pb-20">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Goals</h1>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Coming Soon</h2>
            <p className="text-gray-500">Set and track your financial goals here.</p>
          </div>
        </div>
        
        <BottomNav />
      </div>
    </>
  )
}
