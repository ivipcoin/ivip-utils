export declare const isArray: (value: any) => value is any[];
export declare const isTypedArray: (value: any) => value is ArrayBuffer | Int8Array | Uint8Array | Int16Array | Uint16Array | Int32Array | Uint32Array | Buffer;
export declare const isObject: (value: any) => value is Record<string, any>;
export declare const isJson: (value: any) => boolean;
export declare const isString: (value: any) => value is string;
export declare const isBoolean: (value: any) => value is boolean;
export declare const isNumber: (value: any) => value is number;
export declare const isNumberValid: (value: any) => boolean;
export declare const isInt: (value: any) => boolean;
export declare const isFloat: (value: any) => boolean;
export declare const isNull: (value: any) => value is null;
export declare const isNotNumber: (value: any) => boolean;
export declare const isInfinity: (value: any) => boolean;
export declare const isDate: (value: any) => value is Date;
export declare const isUndefined: (value: any) => value is undefined;
export declare const isFunction: (value: any) => value is Function;
export declare const isSymbol: (value: any) => value is symbol;
export declare const isBuffer: (obj: any) => boolean;
export declare const isEmailValid: (email: string) => boolean;
export declare const isPasswordValid: (password: string) => boolean;
export declare const isPhoneValid: (phone: string) => boolean;
export declare const isUrlValid: (url: string) => boolean;
export declare function isEmpty(obj: object): obj is {};
//# sourceMappingURL=validation.d.ts.map