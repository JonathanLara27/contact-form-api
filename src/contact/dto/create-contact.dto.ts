import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateContactDto {
  @ApiProperty({ example: 'Juan Pérez', description: 'Nombre del remitente' })
  @IsString()
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  nombre: string;

  @ApiProperty({ example: 'juan@test.com', description: 'Email de contacto' })
  @IsEmail({}, { message: 'El email no tiene un formato válido' })
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'Hola, quisiera cotizar...', description: 'Contenido del mensaje' })
  @IsString()
  @IsNotEmpty()
  @MinLength(10, { message: 'El mensaje debe tener al menos 10 caracteres' })
  mensaje: string;
}