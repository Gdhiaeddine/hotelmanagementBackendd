export class createRoomDto {
  number: number;
  floor: number;
  price: number;
  type: 'SINGLE' | 'DOUBLE' | 'SUITEJR' | 'SUITESR';
  status: 'DISPONIBLE' | 'OCCUPE' | 'RESERVE' | 'NETTOYAGE' | 'HORSSERVICE';
}
