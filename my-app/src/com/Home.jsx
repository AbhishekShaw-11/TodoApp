import { useState } from 'react';
import React from 'react'
import './Home.css';
import Time from './Time';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";




const Home = () => {
  const [task, stateTask] = useState("")


  const addTask = () => {
    console.log("addTask")
  }
  const editTask = () => {
    console.log("editTask")
  }
  const deleteTask = () => {
    console.log("deleteTask")
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
          <input className='Home-inp' placeholder='Add your daily task'></input>
          <div className='Home-showData'></div>
          <div className='Home-btn'>
            <AiOutlinePlusCircle onClick={addTask} />
            <FaEdit onClick={editTask} />
            <MdDeleteForever onClick={deleteTask} />
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}

export default Home
