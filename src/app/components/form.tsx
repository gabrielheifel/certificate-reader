"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const createUserFormSchema = z.object({
  name: z.string().transform(name => {
    return name.trim().toLowerCase().split(" ").map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ")
  }),
  email: z.string().email('Formato inválido').toLowerCase(),
  matricula: z.string(),
  cpf: z.string().regex(/^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/).max(11).min(11),
  password: z.string().min(6, 'Mínimo 6 caractéres'),
})

type CreateUserFormData = z.infer<typeof createUserFormSchema>

export default function Form() {
  const [output, setOutput] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema)
  })

  function createUser(data: any) {
    setOutput(JSON.stringify(data, null, 2))
  }

  return (
    <main className='h-screen bg-zinc-58 flex flex-col gap-10 items-center justify-center'>
      <h1 className='text-3xl'>Login</h1>
      <form
        onSubmit={handleSubmit(createUser)}
        className='flex flex-col gap-4 w-full max-w-xs'
        action=""
      >
        <div className='flex flex-col gap-1'>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            className='border border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-800 text-white'
            {...register('name')}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className='border border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-800 text-white'
            {...register('email')}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor="matricula">Matrícula</label>
          <input
            type="text"
            className='border border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-800 text-white'
            {...register('matricula')}
          />
          {errors.matricula && <span>{errors.matricula.message}</span>}
        </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor="cpf">CPF</label>
          <input
            type="text"
            className='border border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-800 text-white'
            {...register('cpf')}
          />
          {errors.cpf && <span>{errors.cpf.message}</span>}
        </div>

        <div className='flex flex-col gap-1'>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            className='border border-zinc-600 shadow-sm rounded h-10 px-3 bg-zinc-800 text-white'
            {...register('password')}
          />
          {errors.password && <span>{errors.password.message}</span>}

        </div>

        <button
          type='submit'
          className='bg-primary-color rounded font-semibold text-white h-10 hover:bg-secundary-color'
        >
          Login
        </button>
        <a href='' className='align-center'>Registre-se</a>
      </form>

      <pre>{output}</pre>
    </main>
  )
}
