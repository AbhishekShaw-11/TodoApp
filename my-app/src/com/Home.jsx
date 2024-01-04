import { useState } from 'react';
import React from 'react'
import './Home.css';
import Time from './Time';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";




const Home = () => {
  const [task, setTask] = useState("")
  const [newTask, setNewTask] = useState([])


  const addTask = () => {

    if (!task) {
      alert("Please enter a task")
    } else {
      setNewTask([...newTask, task])
      setTask("")
    }

  }
  const editTask = () => {
    console.log("editTask")
  }
  const deleteTask = () => {
    console.log("deleteTask")
    setTask("")
  }
  return (
    <React.Fragment>
      <div className='Home-main'>
        <div className='pre  bor'>
          <div className='Home-head-time'>
            <h1 className='Home-app'>
              Todo APP <Time />
            </h1>

          </div>
          <input className='Home-inp' placeholder='Add your daily task' value={task} onChange={(e) => {
            setTask(e.target.value)
          }} />
          <input className='Home-inp' placeholder='Describe your task' />

          <AiOutlinePlusCircle onClick={addTask} />
          <div className='Home-showData'>

            {
              newTask.map((ele, ind) => {
                return (
                  <div className='Home-Todo-item' key={ind}>
                    <h3>{ele}</h3>

                  </div>
                )
              })
            }

          </div>
          <div className='Home-btn'>
            <MdDeleteForever onClick={deleteTask} />
            <FaEdit onClick={editTask} />

          </div>
          <div className='Home-Taskcompleted'>
            <button type="button">Task</button>
            <button type="button">Completed</button>
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}

export default Home
