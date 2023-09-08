import { Inter } from 'next/font/google'
import Sidebar from "@/components/Sidebar"

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Project Timer Tracker',
  description: 'Main page to Project Timer Tracker',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div lang="en">
      <div className={inter.className}>
        <div className="flex flex-row min-h-screen">          
            <Sidebar />
          <div className="flex flex-col items-center justify-center w-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
