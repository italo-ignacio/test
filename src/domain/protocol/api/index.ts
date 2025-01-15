export interface ApiProps {
  route: unknown;
  body?: unknown;
  token?: string | null;
  id?: string;
  method?: 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT';
  queryParams?: unknown;
  isFormData?: boolean;
}
