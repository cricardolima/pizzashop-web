import api from '@/lib/axios'

export interface GetOrdersQuery {
  pageIndex?: number | null
  orderId?: string | null
  customerName?: string | null
  status?: string | null
}

export interface GetOrdersResponse {
  orders: {
    orderId: string
    createdAt: string
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    customerName: string
    total: number
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export const getOrders = async (query?: GetOrdersQuery) => {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params: {
      pageIndex: query?.pageIndex,
      orderId: query?.orderId,
      customerName: query?.customerName,
      status: query?.status,
    },
  })

  return response.data
}
