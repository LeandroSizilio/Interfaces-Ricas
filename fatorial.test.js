"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fatorial_1 = __importDefault(require("./fatorial"));
test('fatorial de 10', () => {
    expect((0, fatorial_1.default)(10)).toBe(3628800);
});
test('fatorial de 7', () => {
    expect((0, fatorial_1.default)(7)).toBe(5040);
});
