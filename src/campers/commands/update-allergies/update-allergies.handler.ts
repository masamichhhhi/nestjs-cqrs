import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { CamperEntityRepository } from 'src/campers/db/camper-entity.repository';
import { CamperFactory } from '../../camper.factory';
import { createCamperRequest } from '../../dto/request/create-camper-request.dto';
import { UpdateAllergiesCommand } from './update-allergies.command';

@CommandHandler(UpdateAllergiesCommand)
export class UpdateAllergiesHanler
  implements ICommandHandler<UpdateAllergiesCommand>
{
  constructor(
    private readonly camperEntityRepository: CamperEntityRepository,
    private readonly eventPublisher: EventPublisher,
  ) {}

  async execute({
    camperId,
    allergies,
  }: UpdateAllergiesCommand): Promise<void> {
    const camper = this.eventPublisher.mergeObjectContext(
      await this.camperEntityRepository.findOneById(camperId),
    );
    camper.updateAllergies(allergies);
    await this.camperEntityRepository.findOneAndReplaceById(camperId, camper);
    camper.commit();
  }
}
