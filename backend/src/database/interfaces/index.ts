export interface Product {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: object
}

export interface User {
  id: number,
  email: string,
  username: string,
  name: object,
  password: string,
  phone: string,
  address: object,
  __v: number
}