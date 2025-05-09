"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseProvider = void 0;
const admin = require("firebase-admin");
exports.firebaseProvider = {
    provide: 'FIREBASE_APP',
    useFactory: () => {
        const firebaseConfig = {};
        console.log('firebaseConfig', firebaseConfig);
        return admin.initializeApp({
            credential: admin.credential.cert({
                type: 'service_account',
                project_id: 'hr-hub-a7803',
                private_key_id: 'ed82f9c0949dcdcf18084919771a812892c1e46c',
                private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC9Cynm8MfKZic7\nKsxNsNQr2mvFDkBWWE55/eaEqIBIjqChf6cK1RbfMF39pW61g4/SfezQSVvRQsYG\n/w8ZK7o7Xxuk+GBmuQWg6p3tkWTWsQjtt4QD5+9EiSCt9B3xsLNbGudPEeTcL0Uw\ncCWHe4V6j1mtRDSE9eXK9K6zwNorx5fKPW7NRZ4roBB+3xoaBtZCeM8zK4F/+vtK\nb6PHfJ4mj6V5TfTdRPaqZzMoZ0NCTh61ELFoLpkKNUVIo2Hadz8fAOp145Js70n4\n6/iU1aNyPIX438Eb/w7l8ojgGOuC8TlE8bUvL5v4MY8/RqYjEKZvR6KnOpYIUAk5\npxuXEd1rAgMBAAECggEAGdx8m3zGADDQXh5BO8GcjPFA/ACymX1UIwkyb2RzxDlK\nzT0e13MGQXsm6IuopQk99CBI9MeMWYjGeW+MG7fpLrUYnY1i9rqKBBUEjNrujhZC\n7+5Cj5w7lcciotl5/TXcm3KHQUBj7CFFWFaHM80YmgchT/w8KRJQoN6vRaT007cp\n/IZdxxY1+/w0jez/3jImn3Iec1KnxpVimYk9YoY/EBD+b+d6XJ75mqUECfFyxn1k\n+ZEjO/slevqe3LLMEVTTiAp4/QL0/Cf29qnMhLOyBwfY0T2woTanBAvxymvRTvgk\n1uQrITZrBKxqkvhtOqf5gsAPDCLzYiUV71busJFrgQKBgQD+vdx9iF3u/xVGF099\nsjORL0g0WUkmF9XvUyONRR1hiZQvOiHiHaqaIvVBUSDzoOl4z5b6JSk4MKGKueGU\nYskgMNzGbTQeFBgDIWtPrf341Dap/sQHfR8TOTWKiohqkqjItqSezZB0DtsfO3nI\nbe4TGTPySMSqWESBiNd8htjf6wKBgQC9+jj8pjPoKXeZ7jg6RkYeaQQXoiEzjZME\nUNjKHrq8OddtQVSVaISrF3tZFCblQTCx+c14WqrDfFwnMjWUwXsSA22Q967ehYAr\nbSkNHJMlFBjLfA6Qv5qa18F+0PxRD07iUEgloex5KLNb8db/Oju2ZN2oDeGuuO0a\nhFeUdKEYgQKBgQDHk9Y4H2uAgCaZqE+l6cRO3d1S7hTKHGiGvPsgheKT9Sa8rW24\naoerhPHi/32yggIInZLqXczice9N8X2TNKXga4e8ifgIDLQXV8psPaO5nAFLxAau\n209KT0rsRMbFwCsuPTHSHLksxCrWWFF8PuwD2H4DNxGlZ8wcNCqnLDqjiwKBgBqz\nX20LAwKfSWMGGzr9g39krSGRNO9k94PExSNrPD2WN5Pwea3iGbteOoTjky/ngKuS\n+3Dt9VAyW1Va9jLpGp4Gg1C7rwUxaDkyR3HDUV8FuxJmZjmr5FPc/SIQx1WxPBoM\nxIcdgfnpYYQLsnb+vUO+W3TyNoTzEsgGT7Tay4WBAoGAez4Jff4flnF2WPiTxjkk\nX13ZsoemOjaLWcbnvHa69q/cOagFD135bq1RgdKwN7e5C/m2V41dmx/nJuLys4LE\nlJCV969V5MeXSFUSn2t7d4R6ajf7V3s2PoppM7ed5gJ11wDEkeKJbwogacazSHvv\nJ1uI7RY25rPrLHBs6GAViZI=\n-----END PRIVATE KEY-----\n',
                client_email: 'firebase-adminsdk-fbsvc@hr-hub-a7803.iam.gserviceaccount.com',
                client_id: '115724792376832552659',
                auth_uri: 'https://accounts.google.com/o/oauth2/auth',
                token_uri: 'https://oauth2.googleapis.com/token',
                auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
                client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40hr-hub-a7803.iam.gserviceaccount.com',
                universe_domain: 'googleapis.com',
            }),
            databaseURL: `https://${firebaseConfig.project_id}.firebaseio.com`,
            storageBucket: `${firebaseConfig.project_id}.appspot.com`,
        });
    },
};
//# sourceMappingURL=firebase.provider.js.map