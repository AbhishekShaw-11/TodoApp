import React from 'react'

const Home = () => {
  return (
    <React.Fragment>
      <div className=" border-solid border-2 border-indigo-600  bg-gray-400  w-full h-96 ">
        <div className='sec  justify-center m-20'>
          <h1 className='text-3xl border-solid border-2 border-indigo-600  flex justify-center '>TODO</h1>

          
          <div className='tag flex justify-center'>
            <input type='text' className='place' placeholder='Add your daily tasks' />


          </div>
          <div className='btn flex justify-center'>
            <button className=' hover:bg-white text:Remove All'><span>ADD</span></button>
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}

export default Home
