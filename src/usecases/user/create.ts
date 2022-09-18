import rls from 'readline-sync';
import { Client } from '../../models/Person';

export function createUser (): Client {
  const name = rls.question('Name: ');
  const age = +rls.question('Age: ');
  const rg = rls.question('RG: ');
  const birthDate = rls.question('Birth Date(yyyy-mm-dd): ');

  return new Client(name, age, rg, new Date(birthDate));
}
