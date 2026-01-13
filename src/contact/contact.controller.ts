import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';

@ApiTags('Contactos')
@Controller('contactos')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  @ApiOperation({ summary: 'Registrar nuevo mensaje de contacto' })
  @ApiResponse({ status: 201, description: 'Mensaje guardado exitosamente.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos (Email, longitud, etc).' })
  create(@Body() createContactDto: CreateContactDto) {
    return this.contactService.create(createContactDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar histórico de mensajes' })
  findAll() {
    return this.contactService.findAll();
  }
}