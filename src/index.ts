import rls from 'readline-sync';

import { Client } from './models/Person';
import { Product } from './models/Product';
import { Sell } from './models/Sell';
import { createProduct } from './usecases/products/create';
import { deleteProduct } from './usecases/products/delete';
import { createSell } from './usecases/sell/create';
import { insertItem } from './usecases/sell/insertItem';
import { createUser } from './usecases/user/create';
import { deleteUser } from './usecases/user/delete';

let users: Client[] = [];
let products: Product[] = [];
const sells: Sell[] = [];

function menuUsers () {
  while (true) {
    console.log(`
Menu de Usuários:
1 - Cadastrar
2 - Listar
3 - Excluir
0 - Voltar`);

    const option = rls.question('Escolha uma opção: ');
    switch (option) {
      case '0': return;
      case '1': users.push(createUser()); break;
      case '2': users.forEach((user) => console.log(user.toString())); break;
      case '3': users = deleteUser(users); break;
      default: console.log('Opção inválida'); break;
    }
  }
}

function menuProducts () {
  while (true) {
    console.log(`
Menu de Vendas:
1 - Cadastrar
2 - Listar
3 - Excluir
0 - Voltar`);

    const option = rls.question('Escolha uma opção: ');
    switch (option) {
      case '0': return;
      case '1': products.push(createProduct()); break;
      case '2': products.forEach((product) => console.log(product.toString())); break;
      case '3': products = deleteProduct(products); break;
      default: console.log('Opção inválida'); break;
    }
  }
}

function menuSell () {
  while (true) {
    console.log(`
Menu de Vendas:
1 - Cadastrar
2 - Listar
3 - Excluir
0 - Voltar`);

    const option = rls.question('Escolha uma opção: ');
    switch (option) {
      case '0': return;
      case '1': {
        if (users.length === 0) {
          console.log('Nenhum usuário cadastrado');
          return;
        }

        if (products.length === 0) {
          console.log('Nenhum produto cadastrado');
          return;
        }
        const rgClient = rls.question('Digite o rg do cliente: ');
        const client = users.find(user => user.rg === rgClient);
        if (!client) {
          console.log('Cliente não encontrado');
          return;
        }

        const order = createSell(client);
        insertItem(products, order);
        sells.push(order);
        break;
      };
      case '2': {
        const order = +rls.question('Digite o código da venda(Número): ');
        const sell = sells.find(sell => sell.order === order);
        if (!sell) {
          console.log('Venda não encontrada');
          return;
        }
        console.log(sell.toString());
        break;
      }
      case '3': break;
      default: console.log('Opção inválida'); break;
    }
  }
}

function bootstrap () {
  while (true) {
    console.log(`
====Init====

1 - Usuários
2 - Produtos
3 - Vendas
0 - Sair`);

    const option = rls.question('Escolha uma opção: ');
    switch (option) {
      case '0': return process.exit(0);
      case '1': menuUsers(); break;
      case '2': menuProducts(); break;
      case '3': menuSell(); break;
      default: console.log('Opção inválida'); break;
    }
  }
}

bootstrap();
