import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronLeft, File, ListFilter, Upload } from "lucide-react"
import UploadFileDialog from "../_components/upload-file-dialog"

export default function Page() {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">

      <div className="flex items-center">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="h-7 w-7">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Button>
          <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
            Certificados
          </h1>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="h-7 gap-1">
                <ListFilter className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Filter
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>
                Active
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>
                Archived
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button size="sm" variant="outline" className="h-7 gap-1">
            <File className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Export
            </span>
          </Button>
          <UploadFileDialog>
            <Button size="sm" className="h-7 gap-1">
              <Upload className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Upload File
              </span>
            </Button>
          </UploadFileDialog>
        </div>
      </div>

      <div className="container max-w-6xl px-4 md:px-6">
        <div className="space-y-4 md:space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Galeria de Imagens</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Explore nossa coleção de imagens incríveis.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <img
              alt="Imagem 1"
              className="aspect-[3/2] w-full overflow-hidden rounded-lg object-cover"
              height={400}
              src="/placeholder.svg"
              width={600}
            />
            <img
              alt="Imagem 2"
              className="aspect-[3/2] w-full overflow-hidden rounded-lg object-cover"
              height={400}
              src="/placeholder.svg"
              width={600}
            />
            <img
              alt="Imagem 3"
              className="aspect-[3/2] w-full overflow-hidden rounded-lg object-cover"
              height={400}
              src="/placeholder.svg"
              width={600}
            />
            <img
              alt="Imagem 4"
              className="aspect-[3/2] w-full overflow-hidden rounded-lg object-cover"
              height={400}
              src="/placeholder.svg"
              width={600}
            />
            <img
              alt="Imagem 5"
              className="aspect-[3/2] w-full overflow-hidden rounded-lg object-cover"
              height={400}
              src="/placeholder.svg"
              width={600}
            />
            <img
              alt="Imagem 6"
              className="aspect-[3/2] w-full overflow-hidden rounded-lg object-cover"
              height={400}
              src="/placeholder.svg"
              width={600}
            />
            <img
              alt="Imagem 7"
              className="aspect-[3/2] w-full overflow-hidden rounded-lg object-cover"
              height={400}
              src="/placeholder.svg"
              width={600}
            />
            <img
              alt="Imagem 8"
              className="aspect-[3/2] w-full overflow-hidden rounded-lg object-cover"
              height={400}
              src="/placeholder.svg"
              width={600}
            />
          </div>
        </div>
      </div>
    </main>
  )
}