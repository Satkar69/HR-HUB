import { Routes } from '@nestjs/core';
import { AdminControllerModule } from './admin/admin-controller.module';
import { AuthControllerModule } from './auth/auth-controller.module';
import { UserControllerModule } from './user/user-controller.module';
import { TeamControllerModule } from './team/team-controller.module';
import { TeamMemberControllerModule } from './team-member/team-member-controller.module';
import { ReviewControllerModule } from './review/review-controller.module';
import { PeerNominationControllerModule } from './peer-nomination/peer-nomination-controller.module';
import { ReviewSummaryControllerModule } from './review-summary/review-summary-controller.module';

const routes: Routes = [
  {
    path: '/hr-hub',
    children: [
      {
        path: '/admin',
        children: [AdminControllerModule],
      },
      {
        path: '/auth',
        children: [AuthControllerModule],
      },
      {
        path: '/user',
        children: [UserControllerModule],
      },
      {
        path: '/team',
        children: [TeamControllerModule],
      },
      {
        path: '/team-member',
        children: [TeamMemberControllerModule],
      },
      {
        path: '/review',
        children: [ReviewControllerModule],
      },
      {
        path: '/peer-nomination',
        children: [PeerNominationControllerModule],
      },
      {
        path: '/review-summary',
        children: [ReviewSummaryControllerModule],
      },
    ],
  },
];

export default routes;
