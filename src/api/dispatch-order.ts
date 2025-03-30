import api from '@/lib/axios'

export interface DispatchOrderParams {
  orderId: string
}

export const dispatchOrder = async (params: DispatchOrderParams) => {
  await api.patch(`/orders/${params.orderId}/dispatch`)
}
