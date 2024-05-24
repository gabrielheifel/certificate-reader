'use client'

import { ExtendedUser } from '@/auth'
import { usePathname } from 'next/navigation'
import {
  DashboardSidebar,
  DashboardSidebarHeader,
  DashboardSidebarMain,
  DashboardSidebarNav,
  DashboardSidebarNavMain,
  DashboardSidebarNavLink,
  DashboardSidebarNavHeader,
  DashboardSidebarNavHeaderTitle,
  DashboardSidebarFooter,
  DashboardSidebarNavButton,
} from '@/components/dashboard/sidebar'
import { UserDropdown } from './user-dropdown'
import { MixerVerticalIcon } from '@radix-ui/react-icons'
import { Clock, Home, Upload } from 'lucide-react'
// import { Logo } from '@/components/logo'

interface MainSidebarProps {
  user?: ExtendedUser
}

export function MainSidebar({ user }: MainSidebarProps) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <DashboardSidebar className='min-h-screen self-start sticky top-0 col-span-1fr'>
      <DashboardSidebarHeader>
        <h1>tes</h1>
      </DashboardSidebarHeader>
      <DashboardSidebarMain className="flex flex-col flex-grow">
        <DashboardSidebarNav>
          <DashboardSidebarNavMain>
            <DashboardSidebarNavLink href="/app" active={isActive('/app')}>
              <Home className="w-3 h-3 mr-3" />
              Painel
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink href="/app" active={isActive('/app/hours')}>
              <Clock className="w-3 h-3 mr-3" />
              Horas
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink
              href="/app/settings"
              active={isActive('/app/settings')}
            >
              <MixerVerticalIcon className="w-3 h-3 mr-3" />
              Configurações
            </DashboardSidebarNavLink>
          </DashboardSidebarNavMain>
        </DashboardSidebarNav>
        <DashboardSidebarNavButton className='mb-10'>
          <Upload className="w-3 h-3 mr-3" />
          Novo Documento
        </DashboardSidebarNavButton>

        <DashboardSidebarNav>
          <DashboardSidebarNavHeader>
            <DashboardSidebarNavHeaderTitle>
              Links extras
            </DashboardSidebarNavHeaderTitle>
          </DashboardSidebarNavHeader>
          <DashboardSidebarNavMain>
            <DashboardSidebarNavLink href="/">
              Precisa de ajuda?
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink href="/">Site</DashboardSidebarNavLink>
          </DashboardSidebarNavMain>
        </DashboardSidebarNav>
      </DashboardSidebarMain>
      <DashboardSidebarFooter>
        <UserDropdown user={user} />
      </DashboardSidebarFooter>
    </DashboardSidebar>
  )
}