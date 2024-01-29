import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Header() {

  // async function onSubmit(formData: FormData) {
  //   'use server';

  //   const name = formData.get('name')
  //   const email = formData.get('email')

  //   console.log(name, email)
  // }

  return (
    <header>
      <Card className='max-w-3xl m-auto mt-2'>
        <CardHeader>
          <CardTitle className='flex'>
            <span className='flex-1'>Bem vindo ao Sistema, /Gabriel/</span>

            <Dialog>
              <DialogTrigger asChild>
                <Avatar className='cursor-pointer'>
                  <AvatarImage src="https://github.com/gabrielheifel.png" alt="@gabrielheifel" />
                  <AvatarFallback>GH</AvatarFallback>
                </Avatar>
              </DialogTrigger>

              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>

                <form action="">
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input
                        required
                        id="name"
                        name='name'
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="email" className="text-right">
                        Email
                      </Label>
                      <Input
                        required
                        id="email"
                        name='email'
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" type="submit">Save changes</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </CardTitle>
        </CardHeader>
      </Card>
    </header>
  )
}
