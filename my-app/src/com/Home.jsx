import { useEffect, useState } from 'react';
import React from 'react'
import './Home.css';
import Time from './Time';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaEdit, FaCheck } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";


//get the local store

const store = () => {
  let todos = localStorage.getItem('todo');

  if (todos) {
    return JSON.parse(localStorage.getItem('todo'));
  } else {
    return [];
  }
}

const Home = () => {
  const [edits, setEdits] = useState(true)
  const [newTask, setNewTask] = useState(store())
  const [task, setTask] = useState("")
  const [editsTask, setEditsTask] = useState(null);

  const addTask = () => {

    if (!task) {
      // alert("Please enter a task ")
    }
    else if (task && !edits) {
      setNewTask(
        newTask.map((elem) => {
          if (elem.id === editsTask) {
            return { ...elem, name: task }
          }
          return elem
        })
      )
      setEdits(true)
      setTask("");
      setEditsTask(null)
    }

    else {
      const allTasks = { id: new Date().getTime().toString(), name: task }
      setNewTask([...newTask, allTasks])
      setTask("")
    }

  }
  // edit your task

  const editTask = (id) => {
    
    let newEditTask = newTask.find((ele) => {
      return id ===  ele.id
    })
    console.log(newEditTask)
    setEdits(false)
    setTask(newEditTask.name);
    setEditsTask(id)
  }

  //delete task
  const deleteTask = (index) => {
    console.log("deleteTask")

    const reduceItem = newTask.filter((elem) => {
      return index !== elem.id
    })
    setNewTask(reduceItem)
  }
  // remove all todo tasks
  const removeAll = () => {
    setNewTask([]);
  }

  //data to add local storage

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(newTask));
  }, [newTask]);

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

          {
            edits ? <AiOutlinePlusCircle onClick={addTask} /> : <FaEdit onClick={addTask} className='edit' />
          }

          <div className='Home-showData'>

            {
              newTask.map((ele) => {
                return (
                  <div className='Home-Todo-item' key={ele.id}>
                    <div className='Home-Todo'>
                      <h3>{ele.name}</h3>
                    </div>

                    <div className='Home-btn'>
                      <MdDeleteForever onClick={() => deleteTask(ele.id)} className='del' />
                      <FaEdit onClick={() => editTask(ele.id)} className='edit' />

                    </div>
                  </div>
                )
              })
            }

          </div>

          <div className='Home-Taskcompleted'>
            <button onClick={removeAll}>Remove all </button>
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}

export default Home
