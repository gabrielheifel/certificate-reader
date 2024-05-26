'use client'

import Link from "next/link"
import {
  Clock,
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  ShoppingCart,
  Upload,
  Users2,
} from "lucide-react"
import { Button } from "@/components/ui/button"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ExtendedUser } from "@/auth"
import UploadFileDialog from "./upload-file-dialog"
// import { usePathname } from "next/navigation"

interface MainSidebarProps {
  user?: ExtendedUser
}

export default function MenuResponsive({ user }: MainSidebarProps) {

  // const pathname = usePathname()

  // const isActive = (path: string) => {
  //   return pathname === path
  // }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="sm:hidden">
          <PanelLeft className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="sm:max-w-xs">
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            href="#"
            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
          >
            <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
          >
            <Home className="h-5 w-5" />
            Dashboard
          </Link>
          <Link
            href="#"
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
          >
            <Clock className="h-5 w-5" />
            Horas
          </Link>
          <Link
            href="#"
            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
          >
            <LineChart className="h-5 w-5" />
            Settings
          </Link>
          <UploadFileDialog>
            <Button className="flex items-center gap-4 px-2.5 hover:text-foreground">
              <Upload className="h-3.5 w-3.5" />
              Upload File
            </Button>
          </UploadFileDialog>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
