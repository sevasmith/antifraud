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
    getFraudAlerts: builder.query({
      query: ({ limit, skip }) => `/users?limit=${limit}&skip=${skip}`,

      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },

      merge: (currentCache, newItems, { arg }) => {
        if (arg.skip === 0) {
          return newItems;
        }
        currentCache.push(...newItems);
      },

      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.skip !== previousArg?.skip;
      },

      transformResponse: (response) => {
        return response.users.map((user) => {
          const isCashIn = Math.random() > 0.5;
          const amount = (Math.random() * 2000 + 10).toFixed(2);
          const transactionId = `#${Math.floor(Math.random() * 9000) + 1000}`;
          const riskScore = Math.floor(Math.random() * 100) + 50;
          const riskLevel = riskScore < 100 ? 'safe' : 'warning';

          const date =
            new Date(Date.now() - Math.random() * 10000000000).toLocaleString(
              'en-US',
              {
                month: 'numeric',
                day: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: '2-digit',
                hour12: false,
              },
            ) + ' PST';

          return {
            id: user.id,
            fullName: `${user.firstName} ${user.lastName}`,
            transactionId,
            date,
            type: isCashIn ? 'Cash-in' : 'Cash-out',
            amount: `$${amount}`,
            riskScore,
            riskLevel,
            rawUserData: user,
          };
        });
      },
    }),
  }),
});

export const { useGetCustomersQuery, useGetFraudAlertsQuery } = dummyApi;
