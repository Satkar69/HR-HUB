import { Module } from '@nestjs/common';
import { firebaseProvider } from './firebase.provider';
import { FirebaseService } from './firebase.service';

@Module({
  providers: [firebaseProvider, FirebaseService],
  exports: [FirebaseService],
})
export class FireBaseModule {}
