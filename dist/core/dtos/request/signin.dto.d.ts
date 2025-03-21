export declare class SigninDto {
    email: string;
    password: string;
    deviceId: string;
    fcmToken: string;
    deviceType: string;
}
export declare class ForgotPasswordDto {
    email: string;
}
export declare class ResetPasswordDto {
    token: string;
    password: string;
    confirmPassword: string;
}
export declare class CheckTokenDto {
    token: string;
}
