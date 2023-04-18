import React from 'react';
import { AppRouter } from './router/AppRouter';
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter/>
      <ReactQueryDevtools initialSiOpen={false} position='bottom-right'/>
    </QueryClientProvider>
  )
}

export default App