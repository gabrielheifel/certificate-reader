import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { ModeToggle } from '../Theme/modeToggle'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export default function Header() {

  // async function onSubmit(formData: FormData) {
  //   'use server';

  //   const name = formData.get('name')
  //   const email = formData.get('email')

  //   console.log(name, email)
  // }

  return (
    <header className='flex justify-center'>
      <Card className='w-full border-bottom' >
        <CardHeader>
          <CardTitle className='flex items-center'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className='ml-2 mr-5'>
                <Avatar className='cursor-pointer'>
                  <AvatarImage src="https://github.com/gabrielheifel.png" alt="@gabrielheifel" />
                  <AvatarFallback>GH</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    Profile
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Billing
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Settings
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Layout
                    <DropdownMenuShortcut>⌘L</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem disabled>API</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Log out
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <span className='flex-1'>Bem vindo ao Sistema, /Gabriel/</span>

            <div className='ml-5'>
              <ModeToggle />
            </div>

          </CardTitle>
        </CardHeader>
      </Card>
    </header>
  )
}
