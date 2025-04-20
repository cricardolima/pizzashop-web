import { setupWorker } from 'msw/browser'

import { getDayOrdersAmountMock } from '@/api/mocks/get-day-orders-amount-mock'
import { getMonthCanceledAmountMock } from '@/api/mocks/get-month-canceled-amount-mock'
import { getMonthRevenueMock } from '@/api/mocks/get-month-revenue-mock'
import { registerRestaurantMock } from '@/api/mocks/register-restaurant-mock'
import { signInMock } from '@/api/mocks/sign-in-mock'
import { env } from '@/env.ts'
import { getMonthOrdersAmountMock } from '@/api/mocks/get-month-orders-amout-mock'
import { getDailyRevenueInPeriodAmountMock } from '@/api/mocks/gat-daily-revenue-in-period-amoun-mock'
import { getPopularProductsMock } from '@/api/mocks/get-popular-products-mock'

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCanceledAmountMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodAmountMock,
  getPopularProductsMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') return
  await worker.start()
}
