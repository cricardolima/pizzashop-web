import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '@/api/get-profile.ts'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      name: 'John Doe',
      id: 'custom-user-id',
      email: 'john.doe@example.com',
      role: 'manager',
      phone: '+55 11 99999-9999',
      createdAt: new Date(),
      updatedAt: null,
    })
  },
)
