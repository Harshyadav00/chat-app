import React from 'react';
import './styles/main.scss';
import 'rsuite/dist/rsuite.min.css';

import { Route, Routes } from 'react-router';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

function App() {
  return (
    <Routes>
        <Route path="/signin" element={<PublicRoute />}>
            <Route path="/signin" element={<SignIn />} />
        </Route>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
