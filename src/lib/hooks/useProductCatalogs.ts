import { keepPreviousData, useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router";
import { useStore } from "./useStore";
import agent from "../api/agent";

export const useProductCatalogs = (id?: string) => {
    const {productCatalog: { settings: { q, category, min_price, max_price, page, page_size }, sort, apiVersion}} = useStore();
    const location = useLocation();

    const { data: productCatalogsResult, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } 
        = useInfiniteQuery<ProductListResult>({
        queryKey: ['products', q, category, min_price, max_price, sort, page, page_size],
        queryFn: async ({ pageParam }) => {
            const response = await agent.get<ProductListResult>(`/${apiVersion}/products`, {
                params: {
                    q,
                    category,
                    min_price,
                    max_price,
                    sort,
                    page,
                    page_size,
                    cursor: pageParam
                }
            });
            return response.data;
        },
        placeholderData: keepPreviousData,
        initialPageParam: null,
        getNextPageParam: (lastPage) => lastPage && lastPage.pages ? lastPage.pages[0].meta.next_cursor : null,
        enabled: !id && location.pathname === '/products'
    });

    const { data: productDetails, isLoading: isLoadingProduct } = useQuery({
        queryKey: ['products', id],
        queryFn: async () => {
            const response = await agent.get<ProductDetail>(`/${apiVersion}/products/${id}`);
            return response.data;
        },
        enabled: !!id
    });

    const { data: apiHealthCheck, isLoading: isLoadingHealthCheck } = useQuery({
        queryKey: ['health'],
        queryFn: async () => {
            const response = await agent.get<HealthCheck>('/health');
            return response.data;
        },
        enabled: !id && location.pathname === '/'
    });

    return {
        productCatalogsResult,
        isLoading,
        productDetails,
        isLoadingProduct,
        apiHealthCheck,
        isLoadingHealthCheck,
        isFetchingNextPage,
        fetchNextPage,
        hasNextPage,
    }
}