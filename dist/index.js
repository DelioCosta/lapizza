"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente_1 = __importDefault(require("./Cliente"));
var Pizza_1 = __importDefault(require("./Pizza"));
var pizzaOne = new Pizza_1.default("Queijo", ["Massa de Pizza", "molho", "queijo"], 20);
var pizzaTwo = new Pizza_1.default("Presunto", ["Massa de Pizza", "molho", "Presunto"], 20);
var cliente = new Cliente_1.default("Vinicius");
var pedido = cliente.fazerPedido([pizzaOne, pizzaTwo]);
console.log(pedido);
