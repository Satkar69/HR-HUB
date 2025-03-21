import * as admin from 'firebase-admin';
export declare const firebaseProvider: {
    provide: string;
    useFactory: () => admin.app.App;
};
