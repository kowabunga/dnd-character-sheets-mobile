import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import './bootstrap.min.css';
import bootstrap from 'bootstrap';
import App from './App';
import NotFoundPage from './pages/NotFoundPage';
import LandingPage from './pages/Landing';
import LearnMorePage from './pages/Learn More/LearnMorePage';
import LearnMoreCharacters from './pages/Learn More/LearnMoreCharacter';
import LearnMoreCampaigns from './pages/Learn More/LearnMoreCampaigns';
import SignUpPage from './pages/SignUp';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<LandingPage />} />
          <Route path='learn-more' element={<LearnMorePage />}>
            <Route path='characters' element={<LearnMoreCharacters />} />
            <Route path='campaigns' element={<LearnMoreCampaigns />} />
          </Route>
          <Route path='signup' element={<SignUpPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
