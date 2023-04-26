export interface Product {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: object
}

export interface StatusMessage {
  status: number,
  message: string,
}