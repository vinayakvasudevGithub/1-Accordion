import React, { useState } from 'react'
import mydata from './Data.js'
import './Accordion.css'

const Accodion = () => {

const [item,setItem]=useState(null)
const [multiselection,setmultiselection]=useState(false)
const [store,setstore]=useState([])

const singleselection=(recieveid)=>{
  setItem(
    recieveid === item 
    ? null 
    : recieveid
  );

}

const enablemultiselection=(recieveid)=>{

 const idstore=[...store]
 const findindex=idstore.indexOf(recieveid)

    if(findindex===-1){
      idstore.push(recieveid)
    }
    else{
      idstore.splice(findindex,1)
    }

 setstore(idstore)
}

console.log(store)

  return (
    <div className='wrapper'>
      <button onClick={ ()=>setmultiselection(!multiselection)}>Enable multiselection</button>
      <div className='accordion'>

      {
        mydata && mydata.length>0 ? 
            (mydata.map((dataitems) => (

              <div key={dataitems.id} className='div1'  
                  onClick={ 
                    multiselection 
                    ? ()=>enablemultiselection(dataitems.id) 
                    : ()=>singleselection(dataitems.id) 
                    } > 
                
                <div className='div2'>
                  <h3>{dataitems.question}</h3>
                  <span>+</span>
                </div>

                    <div className='div3'>
                      { multiselection 
                      ? store.indexOf(dataitems.id) !==-1 && <h5>{dataitems.answer}</h5>
                      : item===dataitems.id && <h5>{dataitems.answer}</h5>
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
