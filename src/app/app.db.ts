import { DBSchema } from '@ngrx/db';

export const schema: DBSchema = {
  version: 1,
  name: 'amway',
  stores: {
    books: {
      autoIncrement: true,
      primaryKey: 'id',
    },
  },
};
