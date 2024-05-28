"use server"

import { writeFile } from "fs/promises"
import { revalidatePath } from "next/cache";
import { currentUser } from "@/lib/user"

export async function uploadFile(formData: FormData) {
  const user = await currentUser()

  if (!user?.registration) {
    return { error: "Não é possível fazer upload, por favor informe sua matrícula em settings." }
  }

  const title = formData.get("title") as String;
  const file = formData.get("file") as File;
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  await writeFile(`./public/uploads/${title}`, buffer);

  console.log('file', file)
  console.log('arrayBuffer', arrayBuffer)
  console.log('buffer', buffer)

  revalidatePath("/");

  return { success: "Seu arquivo foi enviado para processamento." }
}

// export const files = async (values: z.infer<typeof UploadFileSchema>) => {
//   // export const files = async (data: FormData) => {
//   const validatedFields = UploadFileSchema.safeParse(values)
//   // const file: File | null = data.get('file') as unknown as File

//   // console.log(data, file)

//   if (!validatedFields.success) {
//     return { error: "Invalid fields!" }
//   }

//   const { title, file } = validatedFields.data;

//   if (!file) { return { error: "No file selected" } }

//   // const bytes = await file?.arrayBuffer()
//   // const buffer = Buffer.from(bytes)
//   // const path = join('/', 'tmp', file?.name)
//   // await writeFile(path, buffer)
//   // console.log(`open ${path} to see the uploaded file`)

//   // Aqui você pode adicionar sua lógica para upload de arquivos, por exemplo,
//   // usando FormData para enviar o arquivo para o servidor
//   // const formData = new FormData();
//   // formData.append('title', title);
//   // formData.append('file', file);

//   console.log(file)

//   return { success: "feito" }
// }