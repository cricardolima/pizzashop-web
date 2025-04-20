import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '@/api/popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
      {
        product: 'Mushroom Pizza',
        amount: 2,
      },
      {
        product: 'Cheese Pizza',
        amount: 5,
      },
      {
        product: 'Pepperoni Pizza',
        amount: 10,
      },
      {
        product: 'Pasta',
        amount: 15,
      },
      {
        product: 'Portuguesa Pizza',
        amount: 9,
      },
    ])
})
