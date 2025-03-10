import { Routes } from '@nestjs/core';
import { AdminControllerModule } from './admin/admin-controller.module';
import { AuthControllerModule } from './auth/auth-controller.module';
import { UserControllerModule } from './user/user-controller.module';
import { TeamControllerModule } from './team/team-controller.module';

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
    ],
  },
];

export default routes;
