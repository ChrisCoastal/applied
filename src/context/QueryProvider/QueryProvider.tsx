'use client';
import React, { FC } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type ProviderProps = {
  children: React.ReactNode;
};

const QUERY_CLIENT = new QueryClient({
  defaultOptions: {
    queries: {
      // amount of time data will remain fresh
      staleTime: 1000 * 60, // 1 minute
    },
  },
});

const QueryProvider: FC<ProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={QUERY_CLIENT}>
      {children}
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  );
};

export default QueryProvider;
