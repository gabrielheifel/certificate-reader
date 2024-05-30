import { api } from "@/lib/axios";

export async function sendFile(formData: FormData) {
  console.log('entrou')

  try {
    const response = await api.post('/certificate', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return { data: response.data }
  } catch (error) {
    return { error: error }
  }
}