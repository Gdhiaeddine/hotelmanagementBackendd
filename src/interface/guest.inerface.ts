import { GuestType, IDType } from 'generated/prisma/enums';

export interface GuestInterface {
  guestType: GuestType;
  nom?: string;
  companyName?: string;

  phone: string;
  email?: string;
  dateBirth?: string;

  idNumber: string;
  idType: IDType;

  address?: string;
  nationality: string;

  notes?: string;
}
