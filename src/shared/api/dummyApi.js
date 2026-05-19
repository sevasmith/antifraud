import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dummyApi = createApi({
  reducerPath: 'dummyApi',

  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),

  endpoints: (builder) => ({
    getCustomers: builder.query({
      query: ({ page, limit, sortBy, order, search }) => {
        const skip = (page - 1) * limit;

        const basePath = search ? 'users/search' : 'users';

        let url = `${basePath}?limit=${limit}&skip=${skip}`;

        if (search) {
          url += `&q=${search}`;
        }

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

      merge: (currentCache, newItems) => {
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

          const cardNumber = user.bank?.cardNumber
            ? `**** **** **** ${user.bank.cardNumber.slice(-4)}`
            : '5237 55xx xxxx';

          const bankName = user.company?.name
            ? `${user.company.name.toUpperCase()} FINANCIAL`
            : 'AMERICAN EXPRESS INT.';

          const accountNumber = user.bank?.iban?.slice(0, 12) || '488723454555';
          const lastOrderId = `871100${Math.floor(Math.random() * 90000) + 10000}`;
          const atmAddress = user.address
            ? `${user.address.address}, ${user.address.city}`
            : '332 Patterson Street';

          return {
            id: user.id,
            fullName: `${user.firstName} ${user.lastName}`,
            transactionId,
            date,
            type: isCashIn ? 'Cash-in' : 'Cash-out',
            amount: `$${amount}`,
            riskScore,
            riskLevel,
            cardNumber,
            bankName,
            cvvResponse: 'CVV2 Match (M)',
            avsResponse: 'Full Match (Y)',
            accountNumber,
            lastOrderId,
            atmAddress,
            phone: user.phone,
            rawData: user,
          };
        });
      },
    }),
  }),
});

export const { useGetCustomersQuery, useGetFraudAlertsQuery } = dummyApi;
