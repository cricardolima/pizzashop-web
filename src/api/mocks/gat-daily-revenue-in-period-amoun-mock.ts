import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '@/api/get-daily-revenue-in-period'

export const getDailyRevenueInPeriodAmountMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    {
      date: '01/01/2024',
      receipt: 2000,
    },
    {
      date: '02/01/2024',
      receipt: 3000,
    },
    {
      date: '03/01/2024',
      receipt: 500,
    },
    {
      date: '04/01/2024',
      receipt: 1000,
    },
    {
      date: '05/01/2024',
      receipt: 700,
    },
    {
      date: '06/01/2024',
      receipt: 400,
    },
    {
      date: '07/01/2024',
      receipt: 1200,
    },
  ])
})
