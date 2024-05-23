import { HoursDrawer } from '@/app/components/HoursDrawer'
import { signOut } from '@/auth'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import NewDocumentModal from './new-document-modal'
import { ModeToggle } from '@/app/components/Theme/modeToggle'
import Menu from './menu'

interface HeaderDashboardProps {
  image: string | null | undefined,
  username: string | null | undefined,
}

export default function Header({ image, username }: HeaderDashboardProps) {

  return (
    <header className="flex items-center justify-between p-4 md:px-6">
      <div className="flex items-center space-x-3">
        <Avatar>
          <AvatarImage alt="User's avatar" src="/placeholder.svg?height=40&width=40" />
          <AvatarFallback>{image}</AvatarFallback>
        </Avatar>
        <span className="font-medium">{username}</span>
      </div>
      <form action={async () => {
        "use server"
        await signOut()
      }}>
        <div className="flex items-center space-x-3">
          <HoursDrawer className='text-white hidden md:inline-flex' label="Suas horas" />
          <NewDocumentModal className='text-white hidden md:inline-flex' label="Novo documento" />
          <ModeToggle className="hidden md:inline-flex" />
          <Button className="hidden md:inline-flex" variant="outline" type="submit">Sign out</Button>
          <Menu className="md:hidden h-6 w-6 ml-2 mr-5" />
        </div>
      </form>
    </header>
  )
}
