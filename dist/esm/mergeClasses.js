"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findProtoNames = (i) => {
    let names = [];
    let c = i.constructor;
    do {
        const n = Object.getOwnPropertyNames(c.prototype);
        names = names.concat(n.filter((s) => s !== "constructor"));
        c = Object.getPrototypeOf(c);
    } while (c.prototype);
    return names;
};
const wrapProto = (i) => {
    const names = findProtoNames(i);
    const o = {};
    for (const name of names) {
        if (typeof i[name] !== "function") {
            continue;
        }
        o[name] = function (...args) {
            return i[name].apply(i, args);
        };
    }
    return o;
};
const assignProperties = (a, b) => {
    for (const propName of Object.keys(b)) {
        if (a.hasOwnProperty(propName)) {
            continue;
        }
        Object.defineProperty(a, propName, {
            get: function () {
                return b[propName];
            },
            set: function (value) {
                b[propName] = value;
            },
        });
    }
    return a;
};
const mergeClasses = (a, b) => {
    if (b.constructor.name === "Object") {
        return Object.assign(a, b);
    }
    else {
        const wrapper = wrapProto(b);
        a = assignProperties(a, b);
        return assignProperties(a, wrapper);
    }
};
exports.default = mergeClasses;
//# sourceMappingURL=mergeClasses.js.map