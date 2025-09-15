import Head from 'next/head'
import BottomNav from '../components/BottomNav'

export default function Strategies() {
  return (
    <>
      <Head>
        <title>Financial App - Strategies</title>
        <meta name="description" content="Financial strategies and recommendations" />
      </Head>
      
      <div className="min-h-screen bg-gray-50 pb-20">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Strategies</h1>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Coming Soon</h2>
            <p className="text-gray-500">Financial strategies and recommendations will be available here.</p>
          </div>
        </div>
        
        <BottomNav />
      </div>
    </>
  )
}
