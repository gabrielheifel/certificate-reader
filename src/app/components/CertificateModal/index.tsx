import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { HoverInfo } from './hoverInfo'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from "zod";
// import { formSchema } from '@/app/utils/formSchema'

const formSchema = z.object({
  name: z.string()
    .min(1, { message: "Name is required." })
    .transform(name => name.trim()),
  activityName: z.string()
    .min(1, { message: "Activity Name is required." })
    .transform(name => name.trim()),
  issuingOrganization: z.string()
    .min(1, { message: "Issuing Organization is required." })
    .transform(name => name.trim()),
  assessment: z.string().optional(),
  file: z.any().optional(),
  workLoad: z.coerce.number().min(1, { message: "Work Load is invalid." }),
  days: z.string().min(1, { message: "Activity Name is required." }),
  date: z.string().min(1, { message: "Activity Name is required." }),
  email: z.string()
    .email('Formato de email inválido')
    .toLowerCase()
    .refine(email => {
      return (email.endsWith('@inf.ufpel.edu.br'))
    }, 'Email precisa ser o inf.ufpel')
});

type FormSchema = z.infer<typeof formSchema>;

export default function Modal() {

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {}
  })

  const { formState: { errors } } = form;

  function onSubmit(values: FormSchema) {
    console.log(values);
  }


  return (
    <main>
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            Novo documentos
          </Button>
        </DialogTrigger>

        <DialogContent className='w-auto min-w-[1000px] h-auto min-h-[500px]'>
          <DialogHeader className='max-w-fit'>
            <DialogTitle>Novo Certificado</DialogTitle>
          </DialogHeader>

          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-center items-center gap-2">
            <div className="grid grid-cols-2 gap-4">
              <Form {...form}>
                <div className="flex justify-center items-center p-4 rounded-md border-solid border-2">
                  <Button variant="secondary">Upload Certificado</Button>
                  <Input type='file' {...form.register('file')} />
                  {/* <FormField
                    control={form.control}
                    name="file"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Button variant="secondary">Upload Certificado</Button>
                          <Input
                            accept=".jpg, .jpeg, .png, .svg, .gif, .mp4"
                            type="file"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  /> */}
                </div>
                <div className='grid grid-cols-2 gap-6 ml-2'>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='flex'>
                          Seu nome
                          <HoverInfo info='O nome deve estar presente no certificado.' />
                        </FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage>
                          {errors.name && errors.name.message}
                        </FormMessage>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="activityName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='flex'>
                          Nome da atividade
                          <HoverInfo info='Nome ou título da atividade realizada.' />
                        </FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage>
                          {errors.activityName && errors.activityName.message}
                        </FormMessage>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="workLoad"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='flex'>
                          Tempo de trabalho
                          <HoverInfo info='Quantas horas consta no certificado.' />
                        </FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage>
                          {errors.workLoad && errors.workLoad.message}
                        </FormMessage>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="days"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='flex'>
                          Dias
                          <HoverInfo info='Quais dias de trabalho estão contidos nesse certificado?' />
                        </FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage>
                          {errors.days && errors.days.message}
                        </FormMessage>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='flex'>
                          Data
                          <HoverInfo info='Qual a data que o certificado foi gerado.' />
                        </FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage>
                          {errors.date && errors.date.message}
                        </FormMessage>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="issuingOrganization"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='flex'>
                          Nome da organização
                          <HoverInfo info='Nome da exato da organização contido no certificado.' />
                        </FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage>
                          {errors.issuingOrganization && errors.issuingOrganization.message}
                        </FormMessage>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="assessment"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className='flex'>
                          Avaliação/Nota
                          <HoverInfo info='Qual sua pontuação na tarefa (se houver).' />
                        </FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage>
                          {errors.assessment && errors.assessment.message}
                        </FormMessage>
                      </FormItem>
                    )}
                  />
                </div>

              </Form>
            </div>
            <div className="flex items-center justify-end mt-6">
              <Button type="submit">
                Register
              </Button>
            </div>
          </form>

        </DialogContent>
      </Dialog>
    </main >
  )
}
