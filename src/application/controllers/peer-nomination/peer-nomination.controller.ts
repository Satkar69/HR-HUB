import { Controller, Get, Param } from '@nestjs/common';
import { CoreApiResponse } from 'src/application/api/core-api-response';
import { PeerNominationUseCaseService } from 'src/use-cases/peer-nomination-use-cases/peer-nomination-use-case.service';

@Controller()
export class PeerNominationController {
  constructor(
    private readonly peerNominationUseCaseService: PeerNominationUseCaseService,
  ) {}

  @Get('/get/:id')
  async getPeerNomination(@Param('id') peerNominationId: number) {
    return CoreApiResponse.success(
      await this.peerNominationUseCaseService.getPeerNominationById(
        peerNominationId,
      ),
    );
  }
}
