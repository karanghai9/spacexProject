import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import './App.css';
import LandingPage from './container/LandingPage/LandingPage.js';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <LandingPage />
    </ApolloProvider>
  );
}

export default App;
