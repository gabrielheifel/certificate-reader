"use client"

import { Button } from '@/components/ui/button'
import Footer from './components/Footer'
import Link from 'next/link'

export default function Home() {

  return (
    <main className='flex flex-col m-auto max-w-screen-2xl'>
      <div className='flex-1'>

        <Button>
          <Link href='/auth/login'>Login Page</Link>
        </Button>
      </div>

      <Footer />
    </main>
  )
}
