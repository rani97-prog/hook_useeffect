// import React,{useState} from 'react'

// const App = () => {
//   const [show,setShow]=useState()
//   console.log(useState)
//   const x=0

//   console.log(x)
//   console.log(y)
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default App



import React ,{useState} from 'react'
import './App.css'
const App = () => {
  const [count,setCount]=useState(0)
  function dec(){
    setCount(count-10)
  }
  function inc (){
    setCount(count+10)
  }
  return (
    <div  className='timer'>
      <h1> count:</h1>
      <button onClick={dec} disabled={count===0}>-</button>
      {count}
      <button onClick={inc} disabled={count===100}>+</button>
    </div>
  )
}

export default App



 
