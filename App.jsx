import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppNavigator from './src/navigation/AppNavigator';
import store from './src/Redux/store';
const queryClient = new QueryClient();
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AppNavigator/>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
