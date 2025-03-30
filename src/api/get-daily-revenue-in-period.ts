import api from '@/lib/axios'
export interface GetDailyRevenueInPeriodParams {
  from?: Date
  to?: Date
}

export type GetDailyRevenueInPeriodResponse = Array<{
  date: string
  receipt: number
}>

export const getDailyRevenueInPeriod = async (
  params: GetDailyRevenueInPeriodParams,
) => {
  const response = await api.get<GetDailyRevenueInPeriodResponse>(
    `/metrics/daily-receipt-in-period`,
    {
      params: {
        from: params.from,
        to: params.to,
      },
    },
  )
  return response.data
}
