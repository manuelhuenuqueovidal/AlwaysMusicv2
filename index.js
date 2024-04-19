//Json como argumento.
const {
    consultaSQL,
    insertUser,
    deleteUser,
    updateUser,
    consultaRut,
    consultarArray,
} = require("./desarr");
  
//Llamamos a la función para ejecutar la consulta
//consultaSQL("SELECT * FROM estudiantes");
//insertUser(3, "Juana", "183334442", "batería", 2);
consultaRut("183334441");
//updateUser(2, 2);
//deleteUser(3);
//consultarArray("SELECT * FROM estudiantes");