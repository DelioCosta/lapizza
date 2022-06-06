"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const Pizza = require("./Pizza");
var Pedido_1 = __importDefault(require("./Pedido"));
var Cliente = /** @class */ (function () {
    function Cliente(nome) {
        this.nome = nome;
    }
    Cliente.prototype.fazerPedido = function (listaPizza) {
        var cliente = this;
        return new Pedido_1.default(cliente, listaPizza);
    };
    return Cliente;
}());
exports.default = Cliente;
