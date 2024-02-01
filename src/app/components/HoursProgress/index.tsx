import { DrawerDescription, DrawerFooter } from "@/components/ui/drawer";
import { Progress } from "@/components/ui/progress";

interface HoursProgress {
  title?: string,
  hoursProgress?: number,
  maxValue?: number,
}

export default function HoursProgress({ title, hoursProgress, maxValue }: HoursProgress) {

  return (
    <div className="flex flex-col p-4 pb-0">
      <DrawerDescription className="mb-5">
        Horas de <strong>{title}</strong>
      </DrawerDescription>
      <div className="flex items-center justify-center space-x-2">
        <div className="flex-1 text-center">
          <div className="flex text-center justify-center items-end">
            <div className="text-7xl font-bold tracking-tighter">
              {hoursProgress}
            </div>
            <span className="text-xl font-normal">/{maxValue}</span>
          </div>
          <div className="text-[0.70rem] uppercase text-muted-foreground mt-2">
            Horas
          </div>
        </div>
      </div>
      <DrawerFooter className="mb-10">
        <Progress value={hoursProgress} className="w-full rounded-full " />
      </DrawerFooter>

    </div>
  )
}