import { Card, CardHeader } from "@/components/ui/card"

interface HeaderProps {
  label?: string;
  description?: string;
}

export const Header = ({ label, description }: HeaderProps) => {
  return (
    <CardHeader className="space-y-2 text-center">
      <h1 className="text-3xl font-bold">{label}</h1>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </CardHeader>
  )
}