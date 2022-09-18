abstract class Person {
  #name: string;
  #age: number;

  constructor (name: string, age: number) {
    this.#name = name;
    this.#age = age;
  }

  get name () {
    return this.#name;
  }

  get age () {
    return this.#age;
  }
}

export class Client extends Person {
  #rg: string;
  #birthDate: Date;

  constructor (name: string, age: number, rg: string, birthDate: Date) {
    super(name, age);
    this.#rg = rg;
    this.#birthDate = birthDate;
  }

  get rg (): string {
    return this.#rg;
  }

  get birthDate (): Date {
    return this.#birthDate;
  }

  toString (): string {
    return `Client: ${this.name} - ${this.age} - ${this.rg} - ${this.birthDate}`;
  }
}
