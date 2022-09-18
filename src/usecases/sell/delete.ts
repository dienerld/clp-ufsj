import rls from 'readline-sync';

import { Sell } from '../../models/Sell';

export function deleteSell (sells: Sell[]): Sell[] {
  const order = +rls.question('Digite o código da venda(Número): ');
  const sell = sells.find(sell => sell.order === order);
  if (!sell) {
    console.log('Venda não encontrada');
    return sells;
  }
  sells.splice(sells.indexOf(sell), 1);
  console.log('Venda excluída com sucesso');

  return sells;
}
