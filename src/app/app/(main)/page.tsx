import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <main className="col-span-6">
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