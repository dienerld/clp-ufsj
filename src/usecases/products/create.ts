import rls from 'readline-sync';
import { Product } from '../../models/Product';

export function createProduct (): Product {
  const code = +rls.question('Digite o código do produto(Número): ');
  const name = rls.question('Digite o nome do produto: ');
  const price = +rls.question('Digite o preço do produto: ');

  return new Product(code, name, price);
}
