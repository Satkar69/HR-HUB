export type CodeDescription = {
    code: number;
    message: string;
};
export declare class Code {
    static message(code: number): "Success." | "Bad request." | "Unauthorized error." | "Wrong Credentials." | "Access denied." | "Internal error." | "Unknown error.";
    static SUCCESS: CodeDescription;
    static BAD_REQUEST_ERROR: CodeDescription;
    static UNAUTHORIZED_ERROR: CodeDescription;
    static WRONG_CREDENTIALS_ERROR: CodeDescription;
    static ACCESS_DENIED_ERROR: CodeDescription;
    static INTERNAL_ERROR: CodeDescription;
    static ENTITY_NOT_FOUND_ERROR: CodeDescription;
    static ENTITY_VALIDATION_ERROR: CodeDescription;
    static USE_CASE_PORT_VALIDATION_ERROR: CodeDescription;
    static VALUE_OBJECT_VALIDATION_ERROR: CodeDescription;
    static ENTITY_ALREADY_EXISTS_ERROR: CodeDescription;
}
