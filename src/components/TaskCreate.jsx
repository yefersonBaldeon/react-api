import axios from "axios";
import React, { useEffect, useState } from "react";

function TaskCreate() {
  const [name, setname] = useState("");
  const [salery, setsalery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://mysqlexpress-production.up.railway.app/api/employees",
        {
          name,
          salery,
        }
      );

      setname("");
      setsalery("");
      console.log("Respuesta del servidor:", response.data);
      // Realiza acciones adicionales con la respuesta del servidor si es necesario
    } catch (error) {
      console.error("Error al enviar la solicitud POST:", error);
      // Manejar errores de la solicitud aquí
    }
  };

  return (
    <div className="my-5">
      <form action="" onSubmit={handleSubmit}>
        <div className="row">
          <div className=" col-md-6 mb-3">
            <input
              className="form-control"
              type="text"
              value={salery}
              required
              placeholder="Code"
              onChange={(e) => {
                setsalery(e.target.value);
              }}
            />
          </div>
          <div className="col-md-6">
            <input
              className="form-control"
              type="text"
              value={name}
              required
              placeholder="Name and Surname"
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="d-flex justify-content-center my-2">
          <div className="col-md-4 col-md-5 ">
            <button className="mx-auto btn btn-info w-100">send</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TaskCreate;
