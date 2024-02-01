"use client"
import Footer from './components/Footer'
import Header from './components/Header'
import { HoursDrawer } from './components/HoursDrawer'
import Modal from './components/CertificateModal'

export default function Home() {

  return (
    <main className='flex flex-col m-auto max-w-screen-2xl'>
      <div className='flex-1'>
        <Header />
        <div className='flex justify-between mt-5'>
          <HoursDrawer className='ml-4' />
          <div className="ml-auto mr-4">
            <Modal />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
