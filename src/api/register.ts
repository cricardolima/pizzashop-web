import api from '@/lib/axios'

export interface RegisterRequest {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export async function registerRestaurant(request: RegisterRequest) {
  await api.post('/restaurants', {
    restaurantName: request.restaurantName,
    managerName: request.managerName,
    email: request.email,
    phone: request.phone,
  })
}
