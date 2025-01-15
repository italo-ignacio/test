import { refreshUserTokenRequest } from 'main/utils/refresh-user-token';
import { store, useAppSelector } from 'store';
import { updateUserToken } from 'store/persist/slice';
import jwtDecode from 'jwt-decode';

export interface JwtPayload {
  exp: number;
  nbf: number;
  ver: string;
  iss: string;
  sub: string;
  aud: string;
  iat: number;
  auth_time: number;
  idp: string;
  given_name: string;
  family_name: string;
  extension_PhoneNumber: string;
  emails: string[];
  tfp: string;
}

const isExpired = (accessToken: string | null): boolean => {
  if (!accessToken || String(accessToken) === 'null') return true;

  const token = jwtDecode(accessToken ?? '') as JwtPayload | null;

  if (!token?.exp) return true;

  return !!(Date.now() >= token.exp * 1000);
};

export const getToken = async (): Promise<string | null> => {
  const { accessToken } = store.getState().persist;

  if (isExpired(accessToken)) {
    const newToken = await refreshUserTokenRequest();

    if (newToken) {
      store.dispatch(updateUserToken(newToken));
      return newToken.newToken;
    }
  }

  return accessToken;
};

export const useTokenIsExpired = (): boolean => {
  const { accessToken } = useAppSelector((state) => state.persist);

  return isExpired(accessToken);
};
