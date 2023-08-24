import Sidebar from '@/components/Sidebar';
import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';


export const metadata: Metadata = {
  title: 'Web Scraper',
  description: 'Web scraper that scrapes products.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='flex bg-slate-100 h-screen'>
        <Sidebar />
        <main className='p-10 max-w-7xl w-full mx-auto'>
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}
