import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { IoMdInformationCircleOutline } from "react-icons/io"

interface HoverInfo {
  info?: string
}

export function HoverInfo({ info }: HoverInfo) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div>
          <IoMdInformationCircleOutline className='ml-1' />{" "}
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <p className="text-sm">
            {info}
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
