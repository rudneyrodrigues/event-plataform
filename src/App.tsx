import { ApolloProvider } from '@apollo/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { client } from './lib/apollo';

import { Home } from './pages/Home';
import { Event } from './pages/Event';

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Event />} />
          <Route path="/event/lesson/:slug" element={<Event />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  )
}
