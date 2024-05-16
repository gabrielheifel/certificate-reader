import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from "zod";
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { toast } from '@/components/ui/use-toast'
// import { CheckboxReactHookFormMultiple } from '@/app/components/teste'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@radix-ui/react-dropdown-menu'
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
    }, 'Email precisa ser o @inf.ufpel.edu.br'),
  password: z.string().min(6, { message: "Minimo 6 caracteres." }),

  registration: z.string()
    .min(8, { message: "Deve ter 8 caracteres." })
    .max(8, { message: "Deve ter 8 caracteres." }),


  typeHours: z.enum(["firstOption", "secondOption"], {
    required_error: "You need to select a notification type.",
  }),

});

type FormSchema = z.infer<typeof formSchema>;

export default function Login() {

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {}
  })

  const { formState: { errors } } = form;

  function onSubmit(values: FormSchema) {
    console.log(values)
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    })
  }


  return (
    <main>
      <Card>
        <CardHeader className='w-full max-w-screen-2xl h-auto min-h-[500px]'>
          <CardTitle className='max-w-full w-full text-center mb-10 text-muted-foreground'>
            Login
          </CardTitle>

          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-center items-center gap-2">
            <div className='grid grid-cols-2 gap-6 ml-2'>

              <Label>Nome</Label>
              <Input {...form.register('name')} />

              {/* <FormItem>
                <FormLabel className='flex'>
                  Nome
                </FormLabel>
                <FormControl>
                  <Input {...form.register('name')} />
                </FormControl>
                <FormMessage>
                  {errors.name && errors.name.message}
                </FormMessage>
              </FormItem>

              <FormItem>
                <FormLabel className='flex'>
                  Email
                </FormLabel>
                <FormControl>
                  <Input {...form.register('email')} />
                </FormControl>
                <FormMessage>
                  {errors.email && errors.email.message}
                </FormMessage>
              </FormItem>

              <FormItem>
                <FormLabel className='flex'>
                  Senha
                </FormLabel>
                <FormControl>
                  <Input {...form.register('password')} />
                </FormControl>
                <FormMessage>
                  {errors.password && errors.password.message}
                </FormMessage>
              </FormItem>

              <FormItem>
                <FormLabel className='flex'>
                  Matrícula
                </FormLabel>
                <FormControl>
                  <Input {...form.register('registration')} />
                </FormControl>
                <FormMessage>
                  {errors.password && errors.password.message}
                </FormMessage>
              </FormItem> */}

              {/* <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='flex'>
                      E-mail
                    </FormLabel>
                    <FormControl>
                      <Input type='email' {...field} />
                    </FormControl>
                    <FormMessage>
                      {errors.email && errors.email.message}
                    </FormMessage>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='flex'>
                      Senha
                    </FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage>
                      {errors.password && errors.password.message}
                    </FormMessage>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="registration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='flex'>
                      Matrícula
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage>
                      {errors.registration && errors.registration.message}
                    </FormMessage>
                  </FormItem>
                )}
              /> */}

              {/* <FormField
                control={form.control}
                name="typeHours"
                render={({ field }) => ( */}
              {/* <FormItem className="space-y-3">
                <FormLabel>Selecione a forma de contabilizar as horas</FormLabel>
                <FormDescription>Forma como as suas horas serão contabilizadas</FormDescription>
                <FormControl>
                  <RadioGroup
                    // onValueChange={field.onChange}
                    // defaultValue={field.value}
                    className="flex justify-around"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="firstOption" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Primeira opção
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="secondOption" />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Segunda opção
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem> */}
              {/* )}
              /> */}
            </div>

            <div className="flex flex-col items-center justify-end mt-6 gap-2">
              <Button type="submit">Login</Button>
              <Button variant="ghost">Register</Button>
            </div>
          </form>
        </CardHeader>
      </Card>
    </main >
  )
}
