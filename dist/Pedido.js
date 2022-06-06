"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pedido = /** @class */ (function () {
    function Pedido(cliente, pizzas) {
        this.cliente = cliente;
        this.pizzas = pizzas;
        this.valor = pizzas.reduce(function (soma, pizza) { return pizza.valor + soma; }, 0);
        this.status = "EM PREPARO";
    }
    Pedido.prototype.alterarStatus = function (status) {
        this.status = status;
    };
    Pedido.prototype.cancelar = function () {
        //NOTIFICA O CLIENTE
        this.alterarStatus("CANCELADO");
    };
    return Pedido;
}());
exports.default = Pedido;
