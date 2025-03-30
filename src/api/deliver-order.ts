import api from '@/lib/axios'

export interface DeliverOrderParams {
  orderId: string
}

export const deliverOrder = async (params: DeliverOrderParams) => {
  await api.patch(`/orders/${params.orderId}/deliver`)
}
