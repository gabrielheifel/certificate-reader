"use client"

import { useState } from "react"
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
  label: string
}

export function HoursDrawer({ className, label }: HoursDrawer) {
  const [searchHours, setSearchHours] = useState(0)
  const [extensionHours, setExtensionHours] = useState(10)
  const [teachingHours, setTeachingHours] = useState(50)

  function onClick(adjustment: number) {
    setSearchHours(Math.max(200, Math.min(400, searchHours + adjustment)))
  }

  return (
    <Drawer>
      <DrawerTrigger asChild className={className}>
        <Button variant="default">{label}</Button>
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
