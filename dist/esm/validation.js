export const isArray = (value) => {
    return Array.isArray(value) && typeof value === "object";
};
export const isTypedArray = (value) => typeof value === "object" && ["ArrayBuffer", "Buffer", "Uint8Array", "Uint16Array", "Uint32Array", "Int8Array", "Int16Array", "Int32Array"].includes(value.constructor.name);
export const isObject = (value) => {
    return typeof value === "object" && value !== null && !Array.isArray(value);
};
export const isJson = (value) => {
    try {
        const result = JSON.parse(typeof value === "string" ? value : JSON.stringify(value));
        return isObject(result);
    }
    catch {
        return false;
    }
};
export const isString = (value) => {
    return typeof value === "string";
};
export const isBoolean = (value) => {
    return typeof value === "boolean";
};
export const isNumber = (value) => {
    return typeof value === "number" && Number(value) === value;
};
export const isNumberValid = (value) => {
    if (typeof value === "number")
        return true;
    if (typeof value !== "string")
        return false;
    const num = parseFloat(value);
    return !isNaN(num) && isFinite(num) && /^(\-)?\d+(\.\d+)?$/.test(value);
};
export const isInt = (value) => {
    return isNumber(value) && value % 1 === 0;
};
export const isFloat = (value) => {
    return isNumber(value) && value % 1 !== 0;
};
export const isNull = (value) => {
    return value === null && typeof value === "object";
};
export const isNotNumber = (value) => {
    return typeof value === "number" && isNaN(value);
};
export const isInfinity = (value) => {
    return typeof value === "number" && !isFinite(value);
};
export const isDate = (value) => {
    return (value instanceof Date ||
        (typeof value === "object" && value !== null && typeof value.getMonth === "function") ||
        (typeof value === "string" && /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z?$/.test(value) && !isNaN(Date.parse(value))));
};
export const isUndefined = (value) => {
    return value === undefined && typeof value === "undefined";
};
export const isFunction = (value) => {
    return typeof value === "function";
};
export const isSymbol = (value) => {
    return typeof value === "symbol";
};
export const isBuffer = (obj) => {
    return obj != null && obj.constructor != null && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
};
export const isEmailValid = (email) => {
    if (typeof email !== "string") {
        return false;
    }
    const regex = /^\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b$/gi;
    return regex.test(email);
};
export const isPasswordValid = (password) => {
    if (typeof password !== "string") {
        return false;
    }
    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    return regex.test(password);
};
export const isPhoneValid = (phone) => {
    if (typeof phone !== "string") {
        return false;
    }
    var regex = new RegExp("^((1[1-9])|([2-9][0-9]))((3[0-9]{3}[0-9]{4})|(9?[0-9]{3}[0-9]{5}))$");
    return regex.test(String(phone).replace(/\D/gi, ""));
};
export const isUrlValid = (url) => {
    if (typeof url !== "string") {
        return false;
    }
    var regex = /^[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/gi;
    regex =
        /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
    return regex.test(url);
};
export function isEmpty(obj) {
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=validation.js.map