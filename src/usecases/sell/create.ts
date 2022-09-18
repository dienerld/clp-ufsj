import rls from 'readline-sync';
import { Client } from '../../models/Person';
import { Sell } from '../../models/Sell';

export function createSell (client: Client): Sell {
  const code = +rls.question('Digite o código da venda(Número): ');
  return new Sell(code, client);
}
