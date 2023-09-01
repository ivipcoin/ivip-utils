"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleEventEmitter = exports.Ascii85 = exports.ColorUtils = exports.Color = exports.BezierEasing = exports.Base64 = exports.gl = exports.mergeClasses = exports.JSONStringify = void 0;
var JSONStringify_1 = require("./JSONStringify");
Object.defineProperty(exports, "JSONStringify", { enumerable: true, get: function () { return __importDefault(JSONStringify_1).default; } });
var mergeClasses_1 = require("./mergeClasses");
Object.defineProperty(exports, "mergeClasses", { enumerable: true, get: function () { return __importDefault(mergeClasses_1).default; } });
__exportStar(require("./utils"), exports);
__exportStar(require("./validation"), exports);
exports.gl = __importStar(require("./gl"));
var Base64_1 = require("./Base64");
Object.defineProperty(exports, "Base64", { enumerable: true, get: function () { return __importDefault(Base64_1).default; } });
var BezierEasing_1 = require("./BezierEasing");
Object.defineProperty(exports, "BezierEasing", { enumerable: true, get: function () { return __importDefault(BezierEasing_1).default; } });
var Color_1 = require("./Color");
Object.defineProperty(exports, "Color", { enumerable: true, get: function () { return __importDefault(Color_1).default; } });
exports.ColorUtils = __importStar(require("./Color"));
var Ascii85_1 = require("./Ascii85");
Object.defineProperty(exports, "Ascii85", { enumerable: true, get: function () { return __importDefault(Ascii85_1).default; } });
var SimpleEventEmitter_1 = require("./SimpleEventEmitter");
Object.defineProperty(exports, "SimpleEventEmitter", { enumerable: true, get: function () { return __importDefault(SimpleEventEmitter_1).default; } });
//# sourceMappingURL=index.js.map