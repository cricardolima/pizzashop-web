import api from '@/lib/axios'

export interface CancelOrderParams {
  orderId: string
}

export const cancelOrder = async (params: CancelOrderParams) => {
  await api.patch(`/orders/${params.orderId}/cancel`)
}
