import api from '@/lib/axios'

export interface SignInRequest {
  email: string
}

export async function signIn(request: SignInRequest) {
  await api.post('/authenticate', {
    email: request.email,
  })
}
