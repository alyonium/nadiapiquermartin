import { DefinedInitialDataOptions, queryOptions } from '@tanstack/react-query';
import { SingleEntityResponse } from '@/types/api';
import { PriceType } from '@/types/price';

export const priceOptions = queryOptions({
  queryKey: ['price'],
  queryFn: async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/price`,
      {
        headers: {
          authorization: `bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
        },
      }
    );

    return response.json();
  },
}) as DefinedInitialDataOptions<SingleEntityResponse<PriceType>>;
