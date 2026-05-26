import React, { useState } from 'react'

const App = () => {

  const submitHandler = (e)=>{
    e.preventDefault()
   
    const copyTask = [...task]
    copyTask.push({title,details})
    settask(copyTask)
    console.log(copyTask);
    

    settitle("")
    setdetails("")
  }

  const [title, settitle] = useState("")
  const [details, setdetails] = useState("")
  const [task, settask] = useState([])


  const deleteNote = (idx) => {
    const copytask = [...task];

    copytask.splice(idx, 1)

    settask(copytask)
  }


  return (
    < div className='h-screen flex  bg-black text-white'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex justify-between items-start p-10 gap-4 w-1/2 flex-col'>
      
        <input type="text" placeholder='Enter Notes Heading' className='px-5 w-full py-2 border-2 outline-none rounded font-medium' value={title} onChange={(e)=>{
          settitle(e.target.value)
        }} />
        <textarea placeholder='Enter Details' className='px-5 w-full h-32 py-2 flex items-start flex-row border-2 outline-none rounded font-medium' value={details} onChange={(e)=>{
          setdetails(e.target.value)
        }}></textarea>
        <button className='bg-white w-full outline-none text-black px-5 py-2 rounded font-medium scale-95'>Add Notes</button>
      
      </form>


      
            <div className='w-1/2 border-l-2  p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>
        
        {task.map(function(elem,idx){
          return <div key={idx} className='h-52 w-40 p-4 rounded-2xl bg-white text-black'>
            <h3 className=' text-xl font-bold leading-tight'>{elem.title}</h3>
            <p className='font-medium text-gray-600' >{elem.details}</p>
            <button onClick={() => {
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
          </div>
        })}
            
              
            </div>
      </div>
            
    



    </div>
  )
}

export default App