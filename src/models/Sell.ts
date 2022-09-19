import { Client } from './Person';
import { Product } from './Product';

interface ITotalizable {
  total(): number;
}

export class ItemSell implements ITotalizable {
  #product: Product;
  #price: number;
  #quantity: number;

  constructor (product: Product, quantity: number) {
    this.#product = product;
    this.#quantity = quantity;
    this.#price = product.price;
  }

  total (): number {
    return this.#price * this.#quantity;
  }

  toString () {
    return `Nome: ${this.#product.name} - Preço: ${this.#price} - Quantidade: ${this.#quantity} - Total: ${this.total()}`;
  }
}

export class Sell implements ITotalizable {
  #order: number;
  #date: Date;
  #client: Client;
  #items: ItemSell[];

  constructor (order: number, client: Client) {
    this.#order = order;
    this.#date = new Date();
    this.#client = client;
    this.#items = [];
  }

  addItem (product: ItemSell): void {
    this.#items.push(product);
  }

  total (): number {
    return this.#items.reduce((acc, item) => acc + item.total(), 0);
  }

  get order (): number {
    return this.#order;
  }

  get customer (): Client {
    return this.#client;
  }

  get items (): ItemSell[] {
    return this.#items;
  }

  toString (): string {
    return `
    Código: ${this.#order}
    Data: ${this.#date.toLocaleDateString()}
    Cliente: ${this.#client.name}
    Total: ${this.total()}
    Items: ${this.#items.map(item => `\n${item.toString()}`)}
    `;
  }
}
