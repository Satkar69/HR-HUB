import { Module } from '@nestjs/common';
import { TeamUseCaseModule } from 'src/use-cases/team-use-cases/team-use-case.module';
import { TeamController } from './team-controller';

@Module({
  imports: [TeamUseCaseModule],
  controllers: [TeamController],
})
export class TeamControllerModule {}
