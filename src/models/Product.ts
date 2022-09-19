export class Product {
  #code: number;
  #name: string;
  #price: number;

  constructor (code: number, name: string, price: number) {
    this.#code = code;
    this.#name = name;
    this.#price = price;
  }

  get code (): number {
    return this.#code;
  }

  get price (): number {
    return this.#price;
  }

  get name (): string {
    return this.#name;
  }

  toString () {
    return `${this.#code} - ${this.#name} - ${this.#price}`;
  }
}
