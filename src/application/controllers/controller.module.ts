import { Module } from '@nestjs/common';
// import { AuthControllerModule } from './auth/auth-controller.module';
// import { AdminControllerModule } from './admin/admin-controller.module';
// import { UserControllerModule } from './user/user-controller.module';
// import { TripControllerModule } from './trip/trip-controller.module';
// import { CarPoolRequestControllerModule } from './carpool-request/carpool-request.controller.module';
// import { FileStoreControllerModule } from './file-store/file-store-controller.module';

@Module({
  imports: [
    // AuthControllerModule,
    // AdminControllerModule,
    // UserControllerModule,
    // TripControllerModule,
    // CarPoolRequestControllerModule,
    // FileStoreControllerModule,
  ],
  exports: [
    // AuthControllerModule,
    // AdminControllerModule,
    // UserControllerModule,
    // TripControllerModule,
    // CarPoolRequestControllerModule,
    // FileStoreControllerModule,
  ],
})
export class ControllerModule {}
