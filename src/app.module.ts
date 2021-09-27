import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CampersController } from './campers/campers.controller';
import { CamperModule } from './campers/campers.module';
import { DatabaseModule } from './database/databse.module';

@Module({
  imports: [CamperModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
