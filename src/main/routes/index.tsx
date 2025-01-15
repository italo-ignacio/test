import { AuthContent, HomeContent } from 'presentation/environment';
import { AuthTemplate, MainTemplate } from 'presentation/atomic-component/template';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { LoginRoute, PrivateRoute } from 'main/proxies';
import { Suspense } from 'react';
import { routePaths } from 'main/config';
import type { FC } from 'react';

const RouterConfig: FC = () => (
  <BrowserRouter>
    <Suspense fallback={<Outlet />}>
      <Routes>
        {/* Public routes */}
        <Route element={<LoginRoute />}>
          <Route element={<AuthTemplate />}>
            <Route element={<AuthContent />} path={routePaths.login} />
          </Route>
        </Route>

        {/* Private routes */}
        <Route element={<PrivateRoute />} id={'main'}>
          <Route element={<MainTemplate />}>
            <Route element={<HomeContent />} path={routePaths.home} />
          </Route>
        </Route>

        <Route element={<PrivateRoute isRedirect />}>
          <Route element={<> </>} path={'*'} />
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default RouterConfig;
