import React, { useEffect, useState } from "react";
import Son from "./Son";

import TaskTable from "./components/TaskTable";
import boostrap from "bootstrap/dist/css/bootstrap.min.css";


import TaskCreate from "./components/TaskCreate";


function App() {
  const [data, setData] = useState([]);



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
    <div className="container col-md-5">

      <TaskCreate></TaskCreate>
        
      <TaskTable data={data}></TaskTable>
    </div>
  );
}

export default App;
