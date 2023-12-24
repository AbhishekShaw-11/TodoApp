import { useState } from 'react';
import React from 'react'
import './Home.css';
import Time from './Time';

const Home = () => {
  return (
    <React.Fragment>
      <div className='Home-main'>
        <div className='pre  bor'>
        <div className='Home-head-time'>
        <h1>
        Todo APP <Time/>
      </h1>
      <p></p>
        </div>
          <input className='Home-inp' placeholder='Add your daily task'></input>
          <div className='Home-showData'></div>
          <div className='Home-btn'>
            <button>+</button>
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}

export default Home
