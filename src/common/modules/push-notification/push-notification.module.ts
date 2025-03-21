import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/services/data-services/data-services.module';
import { FirebaseModule } from '../firebase/firebase.module';
import { PushNotificationService } from './push-notificattion.service';

@Module({
  imports: [DataServicesModule, FirebaseModule],
  providers: [PushNotificationService],
  exports: [PushNotificationService],
})
export class PushNotificationModule {}
