import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { Content } from "./_components/Content";
import { Orders, Stock } from "@/types/Orders";
import ky from "ky";

export default async function OrdersPage() {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        refetchOnWindowFocus: true,
      },
    },
  })

  await queryClient.prefetchQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const data = await ky.get("http://localhost:8000/api/v1/orders").json<{
        stock: Stock;
        orders: Record<string, Orders>;
      }>();

      return data;
    },
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Content data-test-id="orders-content" />
    </HydrationBoundary>
  );
}