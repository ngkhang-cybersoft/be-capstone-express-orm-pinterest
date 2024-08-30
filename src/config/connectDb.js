/*
Sequelize-auto

  yarn sequelize-auto -h localhost -d db_pinterest -u root -x 123456 -p 3307 --dialect mysql -o src/models -l esm
*/

import Sequelize from 'sequelize';
import envConfig from './envConfig.js';

const { database, user, pass, host, port, dialect } = envConfig;

const sequelize = new Sequelize(
  database,
  user,
  pass,
  {
    host,
    port,
    dialect
  }
);

export default sequelize;
