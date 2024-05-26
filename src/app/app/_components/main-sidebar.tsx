'use client'

import { usePathname } from 'next/navigation'
import Link from "next/link"
import {
  Clock,
  Home,
  LineChart,
  Package,
  Package2,
  Settings,
  ShoppingCart,
  Upload,
  Users2,
} from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { DashboardSidebarNavLink } from "@/components/dashboard/sidebar"
import UploadFileDialog from './upload-file-dialog'
import { Button } from '@/components/ui/button'


export default function MainSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 py-4">
        <Link
          href="#"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <Tooltip>
          <TooltipTrigger>
            <DashboardSidebarNavLink
              href="/app" active={isActive('/app')}
            >
              <Home className="h-5 w-5" />
              <span className="sr-only">Dashboard</span>
            </DashboardSidebarNavLink>
          </TooltipTrigger>
          <TooltipContent side="right">Dashboard</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <DashboardSidebarNavLink
              href="/app/hours" active={isActive('/app/hours')}
              className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <Clock className="h-5 w-5" />
              <span className="sr-only">Horas</span>
            </DashboardSidebarNavLink>
          </TooltipTrigger>
          <TooltipContent side="right">Horas</TooltipContent>
        </Tooltip>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
        <Tooltip>
          <TooltipTrigger >
            <UploadFileDialog>
              <Button
                size="icon"
                className="group h-9 w-9 shrink-0 justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
              >
                <Upload className="h-4 w-4 transition-all group-hover:scale-110" />
                <span className="sr-only">Upload File</span>
              </Button>
            </UploadFileDialog>

          </TooltipTrigger>
          <TooltipContent side="right">Upload File</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Settings</TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  )
}
