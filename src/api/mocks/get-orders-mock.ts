import { http, HttpResponse } from 'msw'

import { GetOrdersResponse } from '@/api/get-orders'

type Orders = GetOrdersResponse['orders']
type OrderStatus = GetOrdersResponse['orders'][number]['status']

const statuses: OrderStatus[] = [
  'pending',
  'processing',
  'delivered',
  'canceled',
  'delivering',
]

const orders: Orders = Array.from({ length: 60 }).map((_, index) => ({
  orderId: `order-${index + 1}`,
  createdAt: new Date().toISOString(),
  status: statuses[index % statuses.length],
  customerName: `Customer ${index + 1}`,
  total: 2400,
}))

export const getOrdersMock = http.get<never, never, GetOrdersResponse>(
  '/orders',
  ({ request }) => {
    const { searchParams } = new URL(request.url)

    const pageIndex = searchParams.get('pageIndex')
      ? Number(searchParams.get('pageIndex'))
      : 0
    const orderId = searchParams.get('orderId')
    const customerName = searchParams.get('customerName')
    const status = searchParams.get('status')

    let filteredOrders = orders

    if (customerName) {
      filteredOrders = filteredOrders.filter((order) =>
        order.customerName.includes(customerName),
      )
    }

    if (orderId) {
      filteredOrders = filteredOrders.filter((order) =>
        order.orderId.includes(orderId),
      )
    }

    if (status) {
      filteredOrders = filteredOrders.filter((order) => order.status === status)
    }

    const paginatedOrders = filteredOrders.slice(
      pageIndex * 10,
      (pageIndex + 1) * 10,
    )

    return HttpResponse.json({
      orders: paginatedOrders,
      meta: {
        pageIndex,
        perPage: 10,
        totalCount: filteredOrders.length,
      },
    })
  },
)
