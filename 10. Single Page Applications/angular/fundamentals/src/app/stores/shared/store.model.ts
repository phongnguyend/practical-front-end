export interface IStore {
    id: string
    name: string
    location?: {
      street: string
      city: string
      zipCode: string
    },
    openedTime: number,
    closedTime: number,
    products: IProduct[]
  }
  
  export interface IProduct {
    id: number
    code: string
    name: string
    quantity: number
    voters: any[]
  }