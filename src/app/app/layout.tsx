import { PropsWithChildren } from 'react'
import { MainSidebar } from './_components/main-sidebar'
import { auth } from '@/auth'

export default async function Layout({ children }: PropsWithChildren) {
  const session = await auth()

  return (
    <div className="grid grid-cols-[14rem_1fr] min-h-screen w-full">
      <MainSidebar user={session?.user} />
      <main>{children}</main>
    </div>
  )
}