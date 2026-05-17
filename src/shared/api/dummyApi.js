import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dummyApi = createApi({
  reducerPath: 'dummyApi',

  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),

  endpoints: (builder) => ({
    getCustomers: builder.query({
      query: ({ page, limit, sortBy, order }) => {
        const skip = (page - 1) * limit;

        let url = `users?limit=${limit}&skip=${skip}`;

        if (sortBy && order) {
          url += `&sortBy=${sortBy}&order=${order}`;
        }

        return url;
      },

      transformResponse: (response) => {
        const transformedREsponse = response.users.map((user) => {
          const randomBalance = Math.random() * (150000 - 1000) + 1000;

          return {
            ...user,
            accBalance: new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(randomBalance),
          };
        });
        return { customers: transformedREsponse, total: response.total };
      },
    }),
  }),
});

export const { useGetCustomersQuery } = dummyApi;
