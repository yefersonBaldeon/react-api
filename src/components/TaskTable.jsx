import React from "react";
import axios from "axios";

function TaskTable({ data }) {
  const handleDelete = async (twenty) => {
    
    try {
      const response = await axios.delete(
        "https://mysqlexpress-production.up.railway.app/api/employees/"+twenty
      );

      console.log("Respuesta del servidor:", response.data);
    } catch (error) {
      console.error("Error al enviar la solicitud POST:", error);
      // Manejar errores de la solicitud aquí
    }
  };

  return (
    <table className="table table-secondary table-striped table-bordered border-primary">
      <thead>
        <tr>
          <th className="table-primary">ID</th>
          <th className="table-primary">Codigo</th>
          <th className="table-primary">Nombres y Apellidos</th>
          <th className="table-primary">delete</th>
        </tr>
      </thead>

      <tbody>
        {data.map((one) => {
          return (
            <tr key={one.id}>
              <td>{one.id}</td>
              <td>{one.salary}</td>
              <td>{one.name}</td>
              <td>
                <button className="btn btn-danger" onClick={()=>{handleDelete(one.id)}}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TaskTable;
