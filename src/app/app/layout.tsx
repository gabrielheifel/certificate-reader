import { PropsWithChildren } from 'react'
import { auth } from '@/auth'
import MainSidebar from './_components/main-sidebar'
import MainHeader from './_components/main-header'

export default async function Layout({ children }: PropsWithChildren) {
  const session = await auth()

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <MainSidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <MainHeader user={session?.user} />
        <main>{children}</main>
      </div>

    </div>
  )
}