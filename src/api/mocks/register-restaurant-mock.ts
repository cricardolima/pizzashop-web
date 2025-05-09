import { http, HttpResponse } from 'msw'

import { RegisterRequest } from '@/api/register'

export const registerRestaurantMock = http.post<never, RegisterRequest>(
  '/restaurants',
  async ({ request }) => {
    const { restaurantName } = await request.json()
    if (restaurantName === 'Pizza Shop') {
      return new HttpResponse(null, {
        status: 201,
      })
    }
    return new HttpResponse(null, { status: 400 })
  },
)
