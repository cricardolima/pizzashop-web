import api from '@/lib/axios'

export interface GetDayOrdersAmountResponse {
  amount: number
  diffFromLastDay: number
}

export const getDayOrdersAmount = async () => {
  const response = await api.get<GetDayOrdersAmountResponse>(
    '/metrics/day-orders-amount',
  )

  return response.data
}
