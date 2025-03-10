import { Module } from '@nestjs/common';
import { TeamMemberController } from './team-member.controller';
import { TeamMemberUseCaseModule } from 'src/use-cases/team-member-use-cases/team-member-use-case.module';

@Module({
  imports: [TeamMemberUseCaseModule],
  controllers: [TeamMemberController],
})
export class TeamMemberControllerModule {}
