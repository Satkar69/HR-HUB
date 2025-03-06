import { Routes } from '@nestjs/core';
// import { AuthControllerModule } from './auth/auth-controller.module';
// import { AdminControllerModule } from './admin/admin-controller.module';
// import { UserControllerModule } from './user/user-controller.module';
// import { TripControllerModule } from './trip/trip-controller.module';
// import { CarPoolRequestControllerModule } from './carpool-request/carpool-request.controller.module';
// import { FileStoreControllerModule } from './file-store/file-store-controller.module';

const routes: Routes = [
  {
    path: '/xploverse',
    children: [
      // {
      //   path: '/auth',
      //   children: [AuthControllerModule],
      // },
      // {
      //   path: '/admin',
      //   children: [AdminControllerModule],
      // },
      // {
      //   path: '/user',
      //   children: [UserControllerModule],
      // },
      // {
      //   path: '/trip',
      //   children: [TripControllerModule],
      // },
      // {
      //   path: '/carpool-request',
      //   children: [CarPoolRequestControllerModule],
      // },
      // {
      //   path: '/file',
      //   children: [FileStoreControllerModule],
      // },
    ],
  },
];

export default routes;
