import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class createUserDto {
  nom: string;
  @IsString()
  @IsNotEmpty()
  username: string;
  @IsString()
  @MinLength(8)
  password: string;
  role: string;
}
