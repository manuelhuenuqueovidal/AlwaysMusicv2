//Importación de librería PostgreSQL.
const { Pool } = require("pg");
//importación de Dotenv.
const dotenv = require('dotenv');
dotenv.config();

//Configuración de la base de datos.
const config = {
  host: process.env.DB_HOST,
  port: 5432,
  database: "alwaysmusic",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};

// Instanciamos la clase Pool
const pool = new Pool(config);

//Conexión de cliente a la base de datos.
pool.connect((err) => {
  if (err) {
    //Manejo de errores: Si hay un error al conectar, se ejecuta este bloque de código
    console.error("Error al conectar con la base de datos:", err.stack);
  } else {
    //Si no hay errores, se ejecuta este bloque de código.
    console.log("Conexión exitosa con la base de datos.");
  }
});

//Exportación de módulo.
module.exports = pool;
