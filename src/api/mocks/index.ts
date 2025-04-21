import { setupWorker } from 'msw/browser'

import { getDailyRevenueInPeriodAmountMock } from '@/api/mocks/gat-daily-revenue-in-period-amoun-mock'
import { getDayOrdersAmountMock } from '@/api/mocks/get-day-orders-amount-mock'
import { getManagedRestaurantMock } from '@/api/mocks/get-managed-restaurant-mock'
import { getMonthCanceledAmountMock } from '@/api/mocks/get-month-canceled-amount-mock'
import { getMonthOrdersAmountMock } from '@/api/mocks/get-month-orders-amout-mock'
import { getMonthRevenueMock } from '@/api/mocks/get-month-revenue-mock'
import { getPopularProductsMock } from '@/api/mocks/get-popular-products-mock'
import { getProfileMock } from '@/api/mocks/get-profile-mock'
import { registerRestaurantMock } from '@/api/mocks/register-restaurant-mock'
import { signInMock } from '@/api/mocks/sign-in-mock'
import { updateProfileMock } from '@/api/mocks/update-profile-mock'
import { env } from '@/env.ts'

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCanceledAmountMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodAmountMock,
  getPopularProductsMock,
  updateProfileMock,
  getManagedRestaurantMock,
  getProfileMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') return
  await worker.start()
}
