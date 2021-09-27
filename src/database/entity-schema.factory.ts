import { AggregateRoot } from '@nestjs/cqrs';
import { IdentifiableEntitySchema } from './identifiable-entity.schema';

export interface EntitySchemaFactory<
  TSchema extends IdentifiableEntitySchema,
  TEnity extends AggregateRoot,
> {
  create(entity: TEnity): TSchema;
  createFromSchema(entitySchema: TSchema): TEnity;
}
