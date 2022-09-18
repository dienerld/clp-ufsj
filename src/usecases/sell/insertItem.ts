import rls from 'readline-sync';
import { Product } from '../../models/Product';
import { ItemSell, Sell } from '../../models/Sell';

export function insertItem (products: Product[], sell: Sell): Sell {
  while (true) {
    const code = +rls.question('Digite o código do produto(Número): ');
    const product = products.find((product) => product.code === code);
    if (!product) {
      console.log('Produto não encontrado');
      return sell;
    }

    const quantity = +rls.question('Digite a quantidade do produto(Número): ');
    const item = new ItemSell(product, quantity);
    sell.addItem(item);

    console.log('Item adicionado com sucesso');
    const option = rls.question('Deseja adicionar mais um item? (S/N): ');
    if (option.match(/n/i)) {
      return sell;
    }
  }
}
