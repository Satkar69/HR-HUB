import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CoreApiResponse } from 'src/application/api/core-api-response';
import { Manager } from 'src/application/decorators/manager.decorator';
import {
  PeerNominationDto,
  UpdatePeerNominationStatusDto,
} from 'src/core/dtos/request/peer-nomination.dto';
import { UserPeerNominationUseCaseService } from 'src/use-cases/user-use-cases/user-peer-nomination/user-peer-nomination-use-case.service';

@Controller('/peer-nomination')
export class UserPeerNominationController {
  constructor(
    private userPeerNominationUseCaseService: UserPeerNominationUseCaseService,
  ) {}

  @Manager()
  @Post('/create')
  async createPeerNomination(@Body() peerNominationDto: PeerNominationDto) {
    return CoreApiResponse.success(
      await this.userPeerNominationUseCaseService.createPeerNomination(
        peerNominationDto,
      ),
    );
  }

  @Get('/assigned/get')
  async getAssignedPeerNomination() {
    return CoreApiResponse.success(
      await this.userPeerNominationUseCaseService.getAssignedPeerNomination(),
    );
  }

  @Manager()
  @Get('/created/get-all')
  async getAllCreatedPeerNomination() {
    return CoreApiResponse.success(
      await this.userPeerNominationUseCaseService.getCreatedPeerMominations(),
    );
  }

  @Patch('/update/:id')
  async updateAssignedPeerNominationStatus(
    @Param('id') peerNominationId: number,
    @Body() updatePeerNominationStatusDto: UpdatePeerNominationStatusDto,
  ) {
    return CoreApiResponse.success(
      await this.userPeerNominationUseCaseService.assignedPeerNominationStatusAction(
        peerNominationId,
        updatePeerNominationStatusDto,
      ),
    );
  }
}
