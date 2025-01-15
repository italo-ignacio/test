import { api } from 'infra/http';
import { apiPaths } from 'main/config';
import { resolverError } from 'main/utils';
import { loginSchema } from 'validation/schema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import type { SubmitHandler } from 'react-hook-form';
import type { LoginRequest } from 'validation/schema';
import type { formReturn } from 'domain/protocol';

export const useLogin = (): formReturn<LoginRequest> => {
  const formData = useForm<LoginRequest>({
    resolver: yupResolver(loginSchema)
  });

  const onSubmit: SubmitHandler<LoginRequest> = async (data) => {
    try {
      await api.post({
        body: data,
        route: apiPaths.login
      });
    } catch (error) {
      resolverError(error);
    }
  };

  return { ...formData, onSubmit };
};
