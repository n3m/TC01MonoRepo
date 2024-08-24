import { Orders, Stock, StockBeer } from "@/types/Orders";
import { useQuery } from "@tanstack/react-query";
import ky from "ky";
import { useEffect, useMemo, useState } from "react";
import { processOrders } from "./utils";

const useModule = () => {
  /** @Globals */

  /** @Selectors */
  const ordersQuery = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const data = await ky.get("http://localhost:8000/api/v1/orders").json<{
        stock: Stock;
        orders: Record<string, Orders>;
      }>();

      return data;
    },
  })

  /** @States */
  const [flags, setflags] = useState({
    isLoading: false,
  })
  const ordersStore = useMemo(() => {
    return {
      data: ordersQuery.data?.orders || {},
      iterable: Object.values(ordersQuery.data?.orders || {}),
    };
  }, [ordersQuery.data])

  const stockStore = useMemo(() => {
    return ordersQuery.data?.stock?.beers.reduce((acc, beer) => {
      acc[beer.name] = beer;
      return acc;
    }, {} as Record<string, StockBeer>)
  }, [ordersQuery.data])

  const processedOrders = useMemo(() => {
    return processOrders(ordersStore.iterable, stockStore || {})
  }, [stockStore, ordersStore])

  /** @Functions */
  useEffect(() => {
    setflags({
      isLoading: ordersQuery.isLoading,
    })
  }, [ordersQuery.isLoading])

  /** @Effects */

  /** @Constants */

  return {
    flags,
    localData: {
      ordersStore,
      stockStore,
      processedOrders,
    },
  }
}

export default useModule;

