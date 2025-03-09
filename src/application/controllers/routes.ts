import { Routes } from '@nestjs/core';
import { AdminControllerModule } from './admin/admin-controller.module';
import { AuthControllerModule } from './auth/auth-controller.module';
import { UserControllerModule } from './user/user-controller.module';

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
    ],
  },
];

export default routes;
