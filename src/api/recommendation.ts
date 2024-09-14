import { DefinedInitialDataOptions, queryOptions } from '@tanstack/react-query';
import { RecommendationType } from '@/types/recommendations';
import { PaginatedResponse, SingleEntityResponse } from '@/types/api';
import { localeMap } from '@/utils/localeMap';

export const recommendationsOptions = (locale: string) =>
  queryOptions({
    queryKey: ['recommendations', locale],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/recommendations?locale=${localeMap[locale as keyof typeof localeMap]}&populate=localizations`,
        {
          headers: {
            authorization: `bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
          },
        }
      );

      return response.json();
    },
  }) as DefinedInitialDataOptions<PaginatedResponse<RecommendationType>>;

export const recommendationSingle = (
  recommendationId: string,
  locale: string
) =>
  queryOptions({
    queryKey: ['recommendations', recommendationId],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/recommendations/?filters\[slug\][$eq]=${recommendationId}&locale=${localeMap[locale as keyof typeof localeMap]}&populate=localizations`,
        {
          headers: {
            authorization: `bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
          },
        }
      );

      return response.json();
    },
  }) as DefinedInitialDataOptions<PaginatedResponse<RecommendationType>>;
