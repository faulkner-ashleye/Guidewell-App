import './globals.css'
import BottomNav from './components/BottomNav'

export const metadata = {
  title: 'Financial App',
  description: 'Personal finance management app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <main className="pb-20">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  )
}
