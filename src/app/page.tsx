"use client"
import { Button } from '@/components/ui/button'
import Footer from './components/Footer'
import { HoursDrawer } from './components/HoursDrawer'
import Link from 'next/link'

export default function Home() {

  return (
    // <p>landing page</p>
    // <AuthProvider>

    <main className='flex flex-col m-auto max-w-screen-2xl'>
      <div className='flex-1'>

        <Button>
          <Link href='/auth/login'>Login Page</Link>
        </Button>
        {/* <div className='flex justify-between mt-5'>
          <HoursDrawer className='ml-4' />
          <NewDocumentModal className='ml-auto mr-4' />
        </div> */}
      </div>

      <Footer />
    </main>
    // </AuthProvider>

  )
}
