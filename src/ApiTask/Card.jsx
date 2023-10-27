import React, { useState } from 'react'
import '../ApiTask/card.css'
import Data from './Data.jsx'
const Card = () => {
  const[dta ,setData]=useState(Data)
  return (
    <div>
      <section>
        <main>
          <p>Todays Birthday {dta.length}😀</p>
          {
             dta.map((item)=>{
              return(
                <div className='cards' key={item.name}>
                  <img src={item.image} alt='' height={'58px'} width={'60px'}/>
                  <ruby><p>{item.age}</p><rt>{item.name}</rt></ruby>
                </div>
              )
            })
          }
         <button className='clear' onClick={()=>setData([])}>Clear</button>
        </main>
      </section>
    </div>
  )
}

export default Card
