import rls from 'readline-sync';

import { Client } from '../../models/Person';

export function deleteUser (users: Client[]): Client[] {
  const rg = rls.question('RG: ');
  const index = users.findIndex(user => user.rg === rg);
  if (index === -1) {
    console.log('Usuário não encontrado');
    return users;
  }
  users.splice(index, 1);

  return users;
}
