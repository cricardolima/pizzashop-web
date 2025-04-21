import { http, HttpResponse } from 'msw'

import { DeliverOrderParams } from '@/api/deliver-order'

export const deliverOrderMock = http.patch<DeliverOrderParams, never, never>(
  '/orders/:orderId/deliver',
  async ({ params }) => {
    if (params.orderId === 'error-order-1') {
      return new HttpResponse(null, {
        status: 400,
      })
    }

    return new HttpResponse(null, {
      status: 204,
    })
  },
)
