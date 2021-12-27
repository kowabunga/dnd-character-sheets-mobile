import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import './index.css';
import './bootstrap.min.css';
import bootstrap from 'bootstrap';
import App from './App';
import NotFoundPage from './pages/NotFoundPage';
import LandingPage from './pages/Landing';
import LearnMorePage from './pages/Learn More/LearnMorePage';
import LearnMoreCharacters from './pages/Learn More/LearnMoreCharacter';
import LearnMoreCampaigns from './pages/Learn More/LearnMoreCampaigns';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import UserState from './context/userState';
import UserPage from './pages/User/User';
import UserCharactersPage from './pages/User/Characters';
import UserCampaignsPage from './pages/User/Campaigns';
import UserAccountPage from './pages/User/Account';

ReactDOM.render(
  <React.StrictMode>
    <UserState>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<LandingPage />} />
            <Route path='learn-more' element={<LearnMorePage />}>
              <Route path='characters' element={<LearnMoreCharacters />} />
              <Route path='campaigns' element={<LearnMoreCampaigns />} />
            </Route>
            <Route path='signup' element={<SignUpPage />} />
            <Route path='signin' element={<SignInPage />} />
            <Route
              path='user'
              element={
                <PrivateRoute>
                  <UserPage />
                </PrivateRoute>
              }
            >
              <Route
                index
                element={
                  <PrivateRoute>
                    <UserAccountPage />
                  </PrivateRoute>
                }
              />
              <Route
                path='characters'
                element={
                  <PrivateRoute>
                    <UserCharactersPage />
                  </PrivateRoute>
                }
              />
              <Route
                path='campaigns'
                element={
                  <PrivateRoute>
                    <UserCampaignsPage />
                  </PrivateRoute>
                }
              />
            </Route>

            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserState>
  </React.StrictMode>,
  document.getElementById('root')
);
