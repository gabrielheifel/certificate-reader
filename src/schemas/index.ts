import * as z from "zod"

export const LoginSchema = z.object({
  email: z.string()
    .email('Formato de email inválido')
    .toLowerCase(),
  // .refine(email => {
  //   return (email.endsWith('@inf.ufpel.edu.br'))
  // }, 'Email precisa ser o inf.ufpel.edu.br'),
  password: z.string().min(6, {
    message: 'Mínimo 6 caracteres'
  }),
})

export const RegisterSchema = z.object({
  email: z.string()
    .email('Formato de email inválido')
    .toLowerCase(),
  // .refine(email => {
  //   return (email.endsWith('@inf.ufpel.edu.br'))
  // }, 'Email precisa ser o inf.ufpel.edu.br'),
  password: z.string().min(1, {
    message: 'Senha precisa ser informada'
  }),
  name: z.string().min(1, {
    message: 'Nome precisa ser informado'
  }),
  registration: z.string().min(8).max(8, {
    message: 'Deve ter 8 caracteres'
  }),
  // role: z.string()
})

export const ResetSchema = z.object({
  email: z.string()
    .email('Formato de email inválido')
    .toLowerCase(),
  // .refine(email => {
  //   return (email.endsWith('@inf.ufpel.edu.br'))
  // }, 'Email precisa ser o inf.ufpel.edu.br'),
})

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: 'Mínimo 6 caracteres'
  }),
})

export const UploadFileSchema = z.object({
  title: z.string().min(2).max(200),
  file: z
    .custom<FileList>((val) => val instanceof FileList, "Required")
    .refine((files) => files.length > 0, "Required")
})

export const FormSchema = z.object({
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
  workLoad: z.coerce.number().min(1, { message: "Work Load is invalid." }),
  days: z.string().min(1, { message: "Activity Name is required." }),
  date: z.string().min(1, { message: "Activity Name is required." }),

  // file: z.instanceof(FileList).transform(list => (list.item(0))),
});