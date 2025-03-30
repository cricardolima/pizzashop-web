import api from '@/lib/axios'

export interface ApproveOrderParams {
  orderId: string
}

export const approveOrder = async (params: ApproveOrderParams) => {
  await api.patch(`/orders/${params.orderId}/approve`)
}
