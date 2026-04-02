import { GuestType, IDType } from 'generated/prisma/enums';

export class createGuestDto {
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
