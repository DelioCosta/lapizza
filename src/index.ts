import Cliente from "./Cliente";
import Pizza from "./Pizza";

const pizzaOne = new Pizza("Queijo", ["Massa de Pizza", "molho", "queijo"], 20);
const pizzaTwo = new Pizza(
  "Presunto",
  ["Massa de Pizza", "molho", "Presunto"],
  20
);

const cliente = new Cliente("Vinicius");

const pedido = cliente.fazerPedido([pizzaOne, pizzaTwo]);

console.log(pedido);
