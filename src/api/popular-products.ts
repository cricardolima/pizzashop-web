import api from '@/lib/axios'

export type GetPopularProductsResponse = Array<{
  product: string
  ammount: number
}>

export const getPopularProducts = async () => {
  const response = await api.get<GetPopularProductsResponse>(
    '/metrics/popular-products',
  )

  return response.data
}
