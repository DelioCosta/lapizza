"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pizza = /** @class */ (function () {
    function Pizza(nome, ingredientes, valor) {
        this.nome = nome;
        this.ingredientes = ingredientes;
        this.preparada = false;
        this.valor = valor;
    }
    Pizza.prototype.preparar = function () {
        this.preparada = true;
    };
    return Pizza;
}());
exports.default = Pizza;
