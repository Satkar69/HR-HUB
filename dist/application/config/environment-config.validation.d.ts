declare class EnvironmentVariables {
    JWT_SECRET: string;
    JWT_EXPIRATION_TIME: string;
    JWT_REFRESH_TOKEN_SECRET: string;
    JWT_REFRESH_TOKEN_EXPIRATION_TIME: string;
    DB_URL_MAIN: string;
    DB_URL_DEV: string;
    DB_NAME: string;
    DATABASE_URL: string;
}
export declare function validate(config: Record<string, unknown>): EnvironmentVariables;
export {};
