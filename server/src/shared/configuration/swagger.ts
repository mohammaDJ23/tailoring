import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Tailoring')
  .setDescription('Tailoring project apis')
  .setVersion('1.0')
  .build();
