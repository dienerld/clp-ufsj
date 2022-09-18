import rls from 'readline-sync';
import { Product } from '../../models/Product';

export function deleteProduct (products: Product[]): Product[] {
  const code = +rls.question('Digite o código do produto(Número): ');
  const index = products.findIndex(product => product.code === code);
  if (index === -1) {
    console.log('Produto não encontrado');
    return products;
  }
  products.splice(index, 1);

  return products;
}
