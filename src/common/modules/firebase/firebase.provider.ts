import * as admin from 'firebase-admin';
import { ConfigService } from '@nestjs/config';

const configService = new ConfigService();

export const firebaseProvider = {
  provide: 'FIREBASE_APP',
  useFactory: () => {
    const firebaseConfig = {} as any;
    console.log('firebaseConfig', firebaseConfig);
    return admin.initializeApp({
      credential: admin.credential.cert({
        type: configService.get<string>('firebase_type'),
        project_id: configService.get<string>('firebase_project_id'),
        private_key_id: configService.get<string>('firebase_private_key_id'),
        private_key: configService.get<string>('firebase_private_key'),
        client_email: configService.get<string>('firebase_client_email'),
        client_id: configService.get<string>('firebase_client_id'),
        auth_uri: configService.get<string>('firebase_auth_uri'),
        token_uri: configService.get<string>('firebase_token_uri'),
        auth_provider_x509_cert_url: configService.get<string>(
          'firebase_auth_provider_x509_cert_url',
        ),
        client_x509_cert_url: configService.get<string>(
          'firebase_client_x509_cert_url',
        ),
        universe_domain: configService.get<string>('firebase_universe_domain'),
      } as admin.ServiceAccount),
      databaseURL: `https://${firebaseConfig.project_id}.firebaseio.com`,
      storageBucket: `${firebaseConfig.project_id}.appspot.com`,
    });
  },
};
