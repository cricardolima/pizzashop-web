import { http, HttpResponse } from 'msw'

import { UpdateProfileRequest } from '@/api/update-profile.ts'

export const updateProfileMock = http.put<never, UpdateProfileRequest>(
  '/profile',
  async ({ request }) => {
    const { name } = await request.json()
    if (name === 'Rocket Pizza') {
      return new HttpResponse(null, {
        status: 204,
      })
    }
    return new HttpResponse(null, { status: 400 })
  },
)
