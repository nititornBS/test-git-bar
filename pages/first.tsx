

import React, { useState } from 'react'

import A from "./a"




function first() {


    const [num, setNum] = useState(0);
    const [show ,setShow] = useState(0);

  return (
    <div>first
        <input type="Number" onChange={(e)=>setNum(+e.target.value)} />
        <button className='border-2 border-red-600   ' 
            onClick={()=>console.log("num" , num)}>  -----set----- 

        </button>
        <h2>{show}</h2>
        <h1>call componant A  </h1> <A num ={num } setNum={setNum} setShow={setShow} show = {show} />


        <button className='border-2 border-black'
               onClick={increase}
           >Increase</button>
        <h1>Bears {bears}</h1>

    </div>
  )
}

export default first