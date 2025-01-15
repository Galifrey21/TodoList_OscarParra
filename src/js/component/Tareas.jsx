import React, { useState } from "react";


const Tareas = () => {
  const [tasks, setTasks] = useState([]); // Lista de tareas
  const [taskInput, setTaskInput] = useState(""); // Input para agregar tarea

  // Agregar tarea al presionar Enter
  const addTask = (e) => {
    if (e.key === "Enter" && taskInput.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: taskInput.trim() }]);
      setTaskInput(""); // Limpia el input después de agregar
    }
  };

  // Eliminar tarea por ID
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="notebook-container d-flex justify-content-center align-items-center">
      <div className="notebook p-4">
        <textarea
          className="notebook-textarea"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          onKeyDown={addTask}
          placeholder="Escribe tu tarea y presiona Enter..."
        ></textarea>
        <ul className="task-list mt-3">
          {tasks.length === 0 ? (
            <p className="text-muted">No hay tareas. Añade una tarea.</p>
          ) : (
            tasks.map((task) => (
              <li key={task.id} className="task-item d-flex justify-content-between align-items-center">
                <span>{task.text}</span>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteTask(task.id)}
                >
                  Eliminar
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Tareas;