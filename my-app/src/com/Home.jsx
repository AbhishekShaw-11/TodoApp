import { useEffect, useState } from 'react';
import React from 'react'
import './Home.css';
import Time from './Time';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaEdit, FaCheck } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";





const Home = () => {
  const [complete, setComplete] = useState(false)
  const [newTask, setNewTask] = useState([])
  const [task, setTask] = useState("")
  


  const addTask = () => {
   
    if (!task ) {
      alert("Please enter a task ")
    } else {
     setNewTask([...newTask, task])
      setTask("")
    }

  }

  const editTask = () => {
    console.log("editTask")
  }

  //delete task
  const deleteTask = (id) => {
  console.log("deleteTask")

  const reduceItem =newTask.filter((elem,ind)=>{
 return ind !==id
  })
   setNewTask(reduceItem)
  }

  const removeAll=() => {
    setNewTask([]);
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

          <AiOutlinePlusCircle onClick={addTask} />
          <div className='Home-showData'>

            {
              newTask.map((ele, ind) => {
                return (
                  <div className='Home-Todo-item' key={ind}>
                    <div className='Home-Todo'>
                      <h3>{ele}</h3>
                      </div>

                    <div className='Home-btn'>
                      <MdDeleteForever onClick={()=>deleteTask(ind)} className='del' />
                      <FaEdit onClick={editTask} className='edit' />
                  
                    </div>
                  </div>
                )
              })
            }

          </div>

          <div className='Home-Taskcompleted'>
            <button type="button" className={`taskbtn ${complete === false && 'active'}`}
              onClick={() => setComplete(false)} >Task</button>
            <button type="button" className={`taskbtn ${complete === true && 'active'}`}
              onClick={() => setComplete(true)}>Completed</button>

              <button onClick={removeAll}>Remove all </button>
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}

export default Home
