import { apiPaths, paths } from 'main/config';
import { store } from 'store';
import { updateUserToken } from 'store/persist/slice';
import jwtDecode from 'jwt-decode';
import type { AnyAction, Dispatch } from '@reduxjs/toolkit';
import type { JwtPayload } from 'main/utils/token';
import type { NavigateFunction } from 'react-router-dom';
import type { User } from 'domain/models';

export const refreshUserTokenRequest = async (): Promise<{
  newToken: string;
  user: User;
} | null> => {
  const { accessToken, refreshToken } = store.getState().persist;

  if (!accessToken || !refreshToken || accessToken === 'null' || refreshToken === 'null')
    return null;

  const { tfp } = jwtDecode(accessToken) as JwtPayload;

  try {
    const { VITE_B2C_URL: b2cUrl, VITE_B2C_CLIENT_SECRET: clientSecret } = import.meta.env;

    const variables = { clientSecret, grantType: 'refresh_token' };

    const url = `${b2cUrl}/${tfp}/oauth2/v2.0/token`;

    const validateLoginUrl =
      `${url}?` +
      `&grant_type=${variables.grantType}` +
      `&refresh_token=${refreshToken}` +
      `&client_secret=${variables.clientSecret}`;

    const response = await fetch(validateLoginUrl);

    const { id_token: token } = (await response.json()) as { id_token: string };

    const { sub } = jwtDecode(token) as JwtPayload;

    const baseUrl = import.meta.env.VITE_API_URL;

    const userResponse = await fetch(`${baseUrl}${apiPaths.user}/${sub}`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    const resUser = (await userResponse.json()) as User;

    return { newToken: token, user: resUser };
  } catch {
    return null;
  }
};

export const refreshUserToken = async (
  dispatch: Dispatch<AnyAction>,
  navigate: NavigateFunction
): Promise<void> => {
  const newData = await refreshUserTokenRequest();

  if (newData) dispatch(updateUserToken(newData));
  else navigate(paths.login);
};
