import { http, HttpResponse } from 'msw'

import { ApproveOrderParams } from '@/api/approve-order'

export const approveOrderMock = http.patch<ApproveOrderParams, never, never>(
  '/orders/:orderId/approve',
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
