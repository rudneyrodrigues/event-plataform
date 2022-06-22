import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Event } from './pages/Event';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Event />} />
      </Routes>
    </BrowserRouter>
  )
}