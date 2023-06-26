import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from 'redux/store';
import css from './App.module.css';

import AuthWrapper from './authWrapper/AuthWrapper';
import NavBar from './navBar/NavBar';

const PrivateRoute = lazy(() => import('./modules/PrivateRoutes/PrivateRoute'));
const PublicRoute = lazy(() => import('./modules/PublicRoute/PublicRoute'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));


const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthWrapper>
          <div className={css.App}>
            <NavBar />
            <Suspense fallback={<p>...Loading page</p>}>
              <Routes>
                <Route element={<PublicRoute />}>
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/registration" element={<RegisterPage />} />
                </Route>

                <Route element={<PrivateRoute />}>
                  <Route path="/contacts" element={<ContactsPage />} />
                </Route>
              </Routes>
            </Suspense>
          </div>
        </AuthWrapper>
      </PersistGate>
    </Provider>
  );
};

export default App;