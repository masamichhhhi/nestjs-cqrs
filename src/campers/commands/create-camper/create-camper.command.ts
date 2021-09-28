import { createCamperRequest } from '../../dto/request/create-camper-request.dto';

export class CreateCamperCommand {
  constructor(public readonly createCamperRequest: createCamperRequest) {}
}
