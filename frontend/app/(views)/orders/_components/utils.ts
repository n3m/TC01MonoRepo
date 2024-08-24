import { OrderItem, Orders, StockBeer } from "@/types/Orders";

export const processOrders = (orders: Orders[], beers: Record<string, StockBeer>) => {
  return orders.map((order) => {

    const rounds = order.rounds.map((round) => {

      const itemsWithQuantityAndPrice = round.items.reduce((acc, item) => {

        acc.push({
          name: item.name,
          price_per_unit: beers?.[item.name].price || 0,
          total: (beers?.[item.name].price || 0) * (item.quantity || 0),
        })

        return acc;
      }, [] as OrderItem[])


      return {
        created: round.created,
        items: itemsWithQuantityAndPrice,
        subtotal: itemsWithQuantityAndPrice.reduce((acc, item) => acc + item.total, 0),
      }
    })

    const roundsSubtotal = rounds.reduce((acc, round) => acc + round.subtotal, 0)

    return {
      ...order,
      rounds,
      subtotal: roundsSubtotal,
    }
  })

}