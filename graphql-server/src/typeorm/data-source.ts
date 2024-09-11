import 'reflect-metadata';  // Required for TypeORM

import { DataSource } from 'typeorm';

import { Authors } from './entity/Authors';

export const PostgresDataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: false,
  logging: true,
  entities: [Authors],
});
