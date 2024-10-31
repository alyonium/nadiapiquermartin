import { DefinedInitialDataOptions, queryOptions } from '@tanstack/react-query';
import { ServiceType } from '@/types/services';
import { PaginatedResponse } from '@/types/api';
import { localeMap } from '@/utils/localeMap';

export const servicesOptions = (locale: string) =>
  queryOptions({
    queryKey: ['services', locale],
    queryFn: async () => {
      const queryParams = new URLSearchParams({
        locale: localeMap[locale as keyof typeof localeMap],
        populate: 'localizations',
        sort: 'createdAt:asc',
      }).toString();

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/services?${queryParams}`,
        {
          headers: {
            authorization: `bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
          },
        }
      );

      return response.json();
    },
  }) as DefinedInitialDataOptions<PaginatedResponse<ServiceType>>;
