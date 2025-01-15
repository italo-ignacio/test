/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpStatusCode } from 'domain/enums';
import { getToken } from 'main/utils/token';
import { removeUndefined } from 'main/utils';
import type { ApiProps } from 'domain/protocol';

const baseUrl = import.meta.env.VITE_API_URL;

export const fetchApi = async <T>(params: ApiProps): Promise<T> => {
  let accessToken = params.token;

  if (!accessToken) accessToken = await getToken();

  const body: any = params.isFormData ? params.body : JSON.stringify(params.body);
  const headers = {};

  if (accessToken) Object.assign(headers, { Authorization: `Bearer ${accessToken}` });

  if (!params.isFormData)
    Object.assign(headers, { 'Content-Type': 'application/json;charset=UTF-8' });

  const id = params.id ? `/${params.id}` : '';

  const queryParams =
    params.queryParams && Object.values(removeUndefined(params.queryParams)).length
      ? `?${new URLSearchParams(removeUndefined(params.queryParams))}`
      : '';

  const response = await fetch(`${baseUrl}${params.route}${id}${queryParams}`, {
    body,
    headers,
    method: params.method
  });

  if ((response.status as unknown as HttpStatusCode) === HttpStatusCode.noContent) return null as T;

  if (response.headers.get('Total-Elements')) {
    const res = {
      content: await response.json(),
      totalElements: Number(response.headers.get('total-elements')),
      totalPages: Number(response.headers.get('total-pages'))
    };

    return res as T;
  }

  if ((response.status as unknown as HttpStatusCode) === HttpStatusCode.forbidden)
    throw Object({ message: 'Permissão negada' });

  const data = await response.json();

  if (response.ok) return data;

  throw Object(data);
};
