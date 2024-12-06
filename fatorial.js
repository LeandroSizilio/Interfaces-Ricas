"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function fatorial(x) {
    if (x === 1)
        return 1;
    else
        return x * fatorial(x - 1);
}
exports.default = fatorial;
