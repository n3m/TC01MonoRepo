export type OrderItem = {
  name: string;
  price_per_unit: number;
  total: number;
}

export type RoundItem = {
  name: string;
  quantity: number;
}

export type OrderRound = {
  created: string;
  items: RoundItem[];
}

export type Orders = {
  _id: string;
  created: string;
  paid: boolean;
  subtotal: number;
  taxes: number;
  discounts: number;
  items: OrderItem[];
  rounds: OrderRound[]
}

export type StockBeer = {
  name: string;
  quantity: number;
  price: number;
}

export type Stock = {
  last_updated: string;
  beers: StockBeer[];
}