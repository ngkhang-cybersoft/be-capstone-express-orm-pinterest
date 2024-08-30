export default {
  portServer: process.env.DB_PORT_SERVER || 8080,
  secretKey: process.env.DB_SECRET_KEY_JWT,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
}
