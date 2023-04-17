import React from 'react';
import { AppRouter } from './router/AppRouter';
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter/>
    </QueryClientProvider>
  )
}

export default App