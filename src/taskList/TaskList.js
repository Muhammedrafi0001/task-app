import React from 'react'
import './TaskList.css'

const TaskList = ({ tasks, deleteTask, handleCheck }) => {
  return (
    <div className='task_list_first' >

      {
        tasks.map((task) => (
          <table key={task.id} className="table table-sm ">
            <tbody  >

              <tr>
                <th >
                  {task.completed ? (<del>{task.name}</del>) : (<span>{task.name}</span>)}
                </th>
                <td className=' form-switch '>
                  <input type="checkbox" className=" form-check-input " id="flexSwitchCheckDefault"
                    checked={task.completed}
                    onChange={(e) => handleCheck(task.id)}
                  /></td>
                <td>
                  <button style={{ marginLeft: "px" }}
                    onClick={() => deleteTask(task.id)}
                    type="button" className='btn btn-danger badge'
                  >x</button>
                </td>
              </tr>
            </tbody>
          </table>
        ))
      }

    </div>
  )
}

export default TaskList
