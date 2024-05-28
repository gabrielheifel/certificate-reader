"use client"

import { useCurrentRole } from "@/hooks/use-current-role"

export function AdminPage() {
  const role = useCurrentRole()

  return (
    <div>
      <h1>{role}</h1>
    </div>
  )
}
