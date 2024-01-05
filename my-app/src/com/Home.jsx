import { useEffect, useState } from 'react';
import React from 'react'
import './Home.css';
import Time from './Time';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaEdit, FaCheck } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { } from "react-icons/fa";




const Home = () => {
  const [complete, setComplete] = useState(false)
  const [newTask, setNewTask] = useState([])
  const [task, setTask] = useState("")
  


  const addTask = () => {
    var newTodo = {
      tas: task,
      
    };

    if (!task ) {
      alert("Please enter a task ")
    } else {
      let update = [...newTask];
      update.push(newTodo);
      setNewTask(update);
      localStorage.setItem('todo', JSON.stringify(update));
      setTask("");
      
    }

  }

  useEffect(() => {
    var save = JSON.parse(localStorage.getItem('todo'));
    if (save) {
      setNewTask(save);
    }
  }, [])
  const editTask = () => {
    console.log("editTask")
  }
  const deleteTask = (ind) => {
    
    newTodo.splice(ind,1)
 localStorage.setItem("todo",JSON.stringify(newTodo))
    setNewTask(newTodo)
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
                      <h3>{ele.tas}</h3>
                      </div>

                    <div className='Home-btn'>
                      <MdDeleteForever onClick={deleteTask} className='del' />
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
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}

export default Home
