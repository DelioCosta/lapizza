export default class Pizza {
  nome: string;
  ingredientes: string[];
  preparada: boolean;
  valor: number;

  constructor(nome: string, ingredientes: string[], valor: number) {
    this.nome = nome;
    this.ingredientes = ingredientes;
    this.preparada = false;
    this.valor = valor;
  }

  preparar(): void {
    this.preparada = true;
  }
}
