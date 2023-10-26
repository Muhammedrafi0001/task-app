import React, { useState } from 'react'
import './TaskForm.css'

const TaskForm = ({ addTask }) => {
    const [inputs, setInputs] = useState('')
    const handleChange = (e) => {
        setInputs(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputs.length=="" ) {
            alert("Please enter a valid task")
            return
        }
        addTask({id: Date.now(), name: inputs,completed:false })
        setInputs('')
    }

    return (
        <div className='task_form_first' >
            <br />
            <form className='taskForm' onSubmit={handleSubmit}>
                <input className='task_form_input' type="name" value={inputs} placeholder='New Task' name={inputs} onChange={handleChange} /> <button type="submit" className="btn btn-success badge  btn-sm " >+</button>
                <hr/>
               
            </form>

        </div>
    )
}

export default TaskForm
