import { jsonApiInstance } from "@/api/apiInstance";
import { queryOptions } from "@tanstack/react-query";

type QuoteDto = {
    text: string;
    author: string;
    id: string;
}

export const QuotesApi = {
    baseKey: 'quotes',
    getQuotesQueryParams: () => {
        return queryOptions({
            queryKey: [QuotesApi.baseKey],
            queryFn: (meta) => jsonApiInstance<QuoteDto>('/random/', {signal: meta.signal})
        })
    }
}