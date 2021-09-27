import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule, SchemaFactory } from '@nestjs/mongoose';
import { CamperFactory } from './camper.factory';
import { CampersController } from './campers.controller';
import { CamperCommandHandlers } from './commands';
import { CamperEntityRepository } from './db/camper-entity.repository';
import { CamperSchemaFactory } from './db/camper-schema.factory';
import { CamperSchema } from './db/camper.schema';
import { CamperEventsHandler } from './events';

@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([
      {
        name: CamperSchema.name,
        schema: SchemaFactory.createForClass(CamperSchema),
      },
    ]),
  ],
  controllers: [CampersController],
  providers: [
    CamperEntityRepository,
    CamperSchemaFactory,
    CamperFactory,
    ...CamperCommandHandlers,
    ...CamperEventsHandler,
  ],
})
export class CamperModule {}
