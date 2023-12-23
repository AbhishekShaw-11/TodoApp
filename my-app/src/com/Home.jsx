import React from 'react'
import './Home.css';

const Home = () => {
  return (
    <React.Fragment>
      <div className='Home-main'>
        <div className='pre  bor'>
          <h1>
            Todo APP
          </h1>
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
