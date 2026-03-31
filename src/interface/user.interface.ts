import { UserRole } from 'generated/prisma/enums';

export interface UserInterface {
  nom: string;
  username: string;
  password: string;
  role: UserRole;
}
