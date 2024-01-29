import React, { useEffect, useState } from 'react'
import Create from './Create'
import { BsCircle } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import axios from 'axios'

function Home() {
    const [todos, settodos] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/get').then(result => settodos(result.data))
            .catch(err => console.log(err));
        return () => {
        }
    }, [])

    const handleEdit = (id) => {
        axios.put('http://localhost:3001/update/' + id).then(result => {
            location.reload();
        })
            .catch(err => console.log(err));
    }

    const hanldeDelete = (id) => {
        axios.delete('http://localhost:3001/delete/' + id).then(result => {
            location.reload();
        })
            .catch(err => console.log(err));
    }

    return (
        <div className='home'>
            <h2>Todo List</h2>
            <Create />
            {
                todos.length === 0 ?
                    <div>
                        <h2>No records</h2>
                    </div>
                    :
                    todos.map(todo => (
                        <div className='task'>
                            <div className='checkbox' onClick={() => handleEdit(todo._id)}>
                                {todo.done ? <CiCircleCheck className='icon'></CiCircleCheck>
                                    : <BsCircle className='icon'></BsCircle>
                                }
                                <p className={todo.done ? 'line_through' : ''} >{todo.task}</p>
                            </div>
                            <div>
                                <span>
                                    <FaTrash className='icon' onClick={() => hanldeDelete(todo._id)} />
                                </span>
                            </div>
                        </div>
                    ))
            }
        </div>
    )
}

export default Home