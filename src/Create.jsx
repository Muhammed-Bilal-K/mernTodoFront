import React, { useState } from 'react'
import axios from 'axios';

function Create() {
    const [task, setTask] = useState()
    const handleAdd = () => {
        axios.post('http://localhost:3001/add', { task: task }).then(result => {
            location.reload();
        })
            .catch(err => console.log(err))
    }
    return (
        <div className='create_form'>
            <input onChange={(e) => setTask(e.target.value)} type="text" name='' id='' placeholder='Enter Task' />
            <button type='button' onClick={handleAdd} >add</button>
        </div>
    )
}

export default Create