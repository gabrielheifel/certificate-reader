import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import HoursProgress from "../HoursProgress"

interface HoursDrawer {
  className?: string,
}

export function HoursDrawer({ className }: HoursDrawer) {
  const [searchHours, setSearchHours] = React.useState(0)
  const [extensionHours, setExtensionHours] = React.useState(10)
  const [teachingHours, setTeachingHours] = React.useState(50)

  function onClick(adjustment: number) {
    setSearchHours(Math.max(200, Math.min(400, searchHours + adjustment)))
  }

  return (
    <Drawer>
      <DrawerTrigger asChild className={className}>
        <Button variant="default">Suas horas</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-3xl">
          <DrawerHeader className="justify-center">
            <DrawerTitle>Suas Horas</DrawerTitle>
          </DrawerHeader>
          <div className="flex justify-between">
            <HoursProgress
              title="Pesquisa"
              hoursProgress={searchHours}
              maxValue={200}
            />
            <HoursProgress
              title="Extensão"
              hoursProgress={extensionHours}
              maxValue={200}
            />
            <HoursProgress
              title="Ensino"
              hoursProgress={teachingHours}
              maxValue={200}
            />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
