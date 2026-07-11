export type ProductImageStyle = 'emerald' | 'sunset' | 'ocean' | 'amethyst'

export type Product = {
  id: number
  name: string
  description: string
  price: number
  stock: number
  storeName: string
  pointReward: number
  imageStyle: ProductImageStyle
}

export type NewProductInput = {
  name: string
  description: string
  price: string
  stock: string
  imageStyle: ProductImageStyle
}

export type StoreStats = {
  storeName: string
  level: number
  points: number
  soldCount: number
  salesTotal: number
}
