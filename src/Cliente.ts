// const Pizza = require("./Pizza");
import Pedido from "./Pedido";
import Pizza from "./Pizza";

export default class Cliente {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  fazerPedido(listaPizza: Pizza[]): Pedido {
    const cliente = this;
    return new Pedido(cliente, listaPizza);
  }
}
