import { callToast } from 'main/utils/call-toast';

export const resolverError = (err: unknown, message?: string): void => {
  const error = err as { message: string };
  const errorMessage = error.message === 'Failed to fetch' ? undefined : error.message;

  callToast.error(message ?? errorMessage ?? 'Erro na requisição');
};
