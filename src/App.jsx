import React, { useEffect, useState } from "react";
import Son from "./Son";
import axios from "axios";
import TaskTable from "./components/TaskTable";

function App() {
  const [data, setData] = useState([]);

  const [postData, setPostData] = useState({
    name: "vamos con todo",
    salery: 10000,

  });

  const handleSubmit = async (e) => {

    e.preventDefault();
    try {
      const response = await axios.post(
        "https://mysqlexpress-production.up.railway.app/api/employees",
        postData
      );
      console.log("Respuesta del servidor:", response.data);
      // Realiza acciones adicionales con la respuesta del servidor si es necesario
    } catch (error) {
      console.error("Error al enviar la solicitud POST:", error);
      // Manejar errores de la solicitud aquí
    }
  };

  useEffect(() => {
    // Función para hacer la solicitud fetch
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://mysqlexpress-production.up.railway.app/api/employees"
        ); // URL de la API a la que quieres hacer la solicitud
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Llama a la función fetch cuando el componente se monta
  }, [data]);

  return (
    <div>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" />
          <button>send</button>
        </form>
      </div>

      <TaskTable data={data}></TaskTable>
    </div>
  );
}

export default App;
