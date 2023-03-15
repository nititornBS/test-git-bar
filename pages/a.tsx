import React from 'react'
import B from './b'

type numtype = {
    num : number;
    setNum :Function;
    setShow:Function;
    show :number
};

function a({num,setNum,setShow,show}:numtype ) {

  
    console.log("A : ",num);
  return (
    <>
    this is A
        <button className='border-2 border-red-600   ' 
            onClick={()=>setShow(setNum)}>  -----set----- 

        </button>

        
        
        call componant B <B/>

    </>
  )
}

export default a