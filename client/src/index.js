import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import './bootstrap.min.css';
import bootstrap from 'bootstrap';
import App from './App';
import NotFoundPage from './pages/NotFoundPage';
import LandingPage from './pages/Landing';
import LearnMore from './pages/Learn More/LearnMore';
import LearnMoreCharacters from './pages/Learn More/LearnMoreCharacter';
import LearnMoreCampaigns from './pages/Learn More/LearnMoreCampaigns';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<LandingPage />} />
          <Route path='learn-more' element={<LearnMore />}>
            <Route path='characters' element={<LearnMoreCharacters />} />
            <Route path='campaigns' element={<LearnMoreCampaigns />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
