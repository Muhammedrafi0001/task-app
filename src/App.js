
import { useState } from 'react';
import TaskForm from './taskForm/TaskForm';
import TaskList from './taskList/TaskList';


function App() {

  const [tasks, setTask] = useState([])

  const addTask = (inputs) => {
    setTask([...tasks, inputs])
  }

  const deleteTask = (id) => {
    alert("Delete from Task")
    setTask(tasks.filter(task => task.id !== id))
  }
  const handleCheck = (id) => {
    setTask(tasks.map((task) => (
      task.id === id ? { ...task, completed: !task.completed } : task
    )
    ))

  }
  return (
    <div>
     
      <TaskForm
        addTask={addTask}
      />
      
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        handleCheck={handleCheck}
      />
   
</div>
  );
}

export default App;
