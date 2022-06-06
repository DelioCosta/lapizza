import Cliente from "./Cliente";
import Pizza from "./Pizza";

export default class Pedido {
  cliente: Cliente;
  valor: number;
  pizzas: Pizza[];
  status: string;

  constructor(cliente: Cliente, pizzas: Pizza[]) {
    this.cliente = cliente;
    this.pizzas = pizzas;
    this.valor = pizzas.reduce(
      (soma: number, pizza: Pizza) => pizza.valor + soma,
      0
    );
    this.status = "EM PREPARO";
  }

  alterarStatus(status: string): void {
    this.status = status;
  }

  cancelar(): void {
    //NOTIFICA O CLIENTE
    this.alterarStatus("CANCELADO");
  }
}
