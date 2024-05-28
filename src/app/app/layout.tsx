import { PropsWithChildren } from 'react'
import MainSidebar from './_components/main-sidebar'
import MainHeader from './_components/main-header'

export default async function AppLayout({ children }: PropsWithChildren) {

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <MainSidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <MainHeader />
        <main className='mt-4'>{children}</main>
      </div>
    </div>
  )
}