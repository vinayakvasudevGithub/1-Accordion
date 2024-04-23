import React, { useState } from 'react'
import mydata from './Data.js'
import './Accordion.css'

const Accodion = () => {

const arr=[]

const [item,setItem]=useState(null)
const [store,setstore]=useState([])



const singleselection=(recieveid)=>{
  setItem(
    recieveid === item ?
      null 
    : recieveid
  );

  setstore(recieveid)
}
console.log(store)


  
  return (
    <div className='wrapper'>
      <button>Enable multiselection</button>
      <div className='accordion'>
      {
        mydata && mydata.length>0 ? 
            (mydata.map((dataitems) => (
              <div onClick={()=>singleselection(dataitems.id)} key={dataitems.id} className='div1'>
                <div className='div2'>
                  <h3>{dataitems.question}</h3>
                  <span>+</span>
                </div>
                    <div className='div3'>
                      {
                        item===dataitems.id ?
                        <h5>{dataitems.answer}</h5>
                        :null
                      }
                    </div>
              </div>
            )))
        : (<div>no data found!</div>) 
      }
      </div>
    </div>
  )
}

export default Accodion
