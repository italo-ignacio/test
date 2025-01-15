import type { Pagination } from 'domain/protocol';
import type { Role } from 'domain/enums';

export interface User {
  id: string;
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
  accessValidatedAt: Date;
  admin: boolean;
  role: Role;
  createdAt: Date;
}

export interface FindUserQuery extends Pagination {
  content: User[];
}
