import { LoadingTemplate } from 'presentation/atomic-component/template';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { paths } from 'main/config';
import { refreshUserToken } from 'main/utils/refresh-user-token';
import { setIsRefreshing, setRedirectPath } from 'store/persist/slice';
import { useAppSelector } from 'store';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useTokenIsExpired } from 'main/utils/token';
import type { FC } from 'react';
import type { RouteProps } from 'react-router-dom';

type PrivateRouteProps = RouteProps & {
  isRedirect?: boolean;
};

export const PrivateRoute: FC<PrivateRouteProps> = ({ isRedirect }) => {
  const isExpired = useTokenIsExpired();
  const { refreshToken, isRefreshing } = useAppSelector((state) => state.persist);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = async (): Promise<void> => {
      if (isRedirect) navigate(paths.login);

      if (isExpired) dispatch(setRedirectPath(location.pathname));
      else setTimeout(() => dispatch(setRedirectPath(null)), 1000);

      if (isExpired && refreshToken && String(refreshToken) !== 'null')
        try {
          dispatch(setIsRefreshing(true));
          await refreshUserToken(dispatch, navigate);
        } finally {
          dispatch(setIsRefreshing(false));
        }
      else if (isExpired) navigate(paths.login);
    };

    checkToken();
  }, [isExpired, refreshToken]);

  if (isRefreshing) return <LoadingTemplate />;

  return isExpired ? null : <Outlet />;
};
