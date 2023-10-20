import React from "react";

function TaskTable({data}) {
  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>salary</th>
          <th>delete</th>
        </tr>
      </thead>

      <tbody>
        {data.map((one) => {
          return (
            <tr key={one.id}>
              <td>{one.name}</td>
              <td>{one.salary}</td>
              <td><button>Delete</button></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TaskTable;
