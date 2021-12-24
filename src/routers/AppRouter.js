import { Routes, Route, BrowserRouter } from 'react-router-dom';

import LoginScreen from './../login/container/LoginScreen';
import DashboardRoutes from './DashboardRoutes';
import DoNotFound from './../UI/components/DoNotFound';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginScreen />
            </PublicRoute>
          }
        ></Route>

        {/* <Route path="/login" element={<LoginScreen />} /> */}
        <Route path="/404" element={<DoNotFound />} />
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <DashboardRoutes />
            </PrivateRoute>
          }
        ></Route>

        {/* <Route path="/*" element={<DashboardRoutes />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
