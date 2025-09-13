import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { QuotesApi } from "./api";

export function useQuote() {
    const {data: randomQuote, error, refetch, isFetching} = useQuery({
        ...QuotesApi.getQuotesQueryParams(),
        placeholderData: keepPreviousData,
    })

    return {randomQuote, error, refetch, isFetching}
}
