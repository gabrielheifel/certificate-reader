import * as React from "react"

import { Input } from "./input"
import { cn } from "@/lib/utils"

export interface InputSufixProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  sufix: string,
}

const InputSufix = React.forwardRef<HTMLInputElement, InputSufixProps>(
  ({ className, type, sufix, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}>
        <input
          type={type}
          className={cn(
            "flex w-full rounded-md bg-background py-2 text-sm",
            className
          )}
          ref={ref}
          {...props}
        />        {!!sufix && (
          <span className="ml-2 text-muted-foreground">{sufix}</span>
        )}
      </div>
    )
  }
)
InputSufix.displayName = "Input"

export { InputSufix }
