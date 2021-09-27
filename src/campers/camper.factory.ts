import { EntityFactory } from 'src/database/entity.factory';
import { ObjectId } from 'mongodb';
import { Camper } from './camper';
import { CamperCreatedEvent } from './events/camper-created.event';
import { CamperEntityRepository } from './db/camper-entity.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CamperFactory implements EntityFactory<Camper> {
  constructor(
    private readonly camperEntityRepository: CamperEntityRepository,
  ) {}
  async create(
    name: string,
    age: number,
    allergies: string[],
  ): Promise<Camper> {
    const camper = new Camper(
      new ObjectId().toHexString(),
      name,
      age,
      allergies,
    );
    await this.camperEntityRepository.create(camper);
    camper.apply(new CamperCreatedEvent(camper.getId()));
    return camper;
  }
}
