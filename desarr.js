//Conexión con configuración.
const pool = require("./config");

//Ejecutar una consulta SQL.
async function consultaSQL(consulta) {
  //Obtenemos una conexión de la pool
  const client = await pool.connect();
  try {
    //Hacer consulta.
    const res = await client.query(consulta);
    //Ver resultados.
    console.log("Consulta existosa.", res.rows);
  } catch (error) {
    //Manejo de errores.
    console.error("Error al ejecutar la consulta,", error);
  } 
}

//Insertar un estudiante.
const insertUser = async (id, nombre, rut, curso, nivel) => {
  try {
    const text = "INSERT INTO estudiantes(id, nombre, rut, curso, nivel) VALUES($1, $2, $3, $4, $5)";
    const values = [id, nombre, rut, curso, nivel];
    const res = await pool.query(text, values);
    console.log("Inserción existosa:", res.rows);
     } catch (error) { 
      //Manejo de errores.
    console.error("Error al insertar estudiante,", error)
  }
};

// Consulta del RUT.
const consultaRut = async (rut) => {
  try {
    const text = "SELECT * FROM estudiantes WHERE rut = $1";
    const values = [rut];
    const res = await pool.query(text, values);

    // Verificar si se encontraron resultados
    if (res.rows.length === 0) {
      console.log("El RUT consultado no existe, vuelve a intentar.");
    } else {
      console.log("Consulta exitosa:", res.rows);
    }
  } catch (error) {
    // Manejo de errores.
    console.error("Error al consultar rut:", error);
  }
};

 //Actualizar un usuario
const updateUser = async (id, nivel) => {
  try {
    const text = "UPDATE estudiantes SET  nivel = $2 WHERE id = $1";
    const values = [id, nivel];
    const res = await pool.query(text, values);
    console.log(`Se actualizó con existo el id: ${id}`, res.rows);
  } catch (error) {
    console.error("Error al actualizar datos,", error);
  }
};


// Eliminar un usuario
const deleteUser = async (id) => {
  try {
    const text = "DELETE FROM estudiantes WHERE id = $1";
    const values = [id];
    const res = await pool.query(text, values);
    console.log(`Se eliminó exitosamente el registro ${id}`, res.rows);
  } catch (error) { 
    console.error("Error al borrar,", error)
  }


};

//Ver a todos los estudiantes como un arreglo.
const consultarArray = async (consulta) => {
  try {
    const SQLQuery = {
    rowMode: "array",
    text: consulta,
    };
    const res = await pool.query(SQLQuery);
    console.log("Ultimo registro agregado: ", res.rows);
    } catch (error) {
      console.error("Error al ejecutar la consulta del array,", error)    
  }
}


//Exportar módulos.
module.exports = { consultaSQL, insertUser, updateUser, consultaRut, deleteUser, consultarArray };
