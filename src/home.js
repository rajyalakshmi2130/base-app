import React from 'react'


function Home(props){
    console.log(props)
    return(
      <div>
       Hello from home component
       <h2> val = {props.val}</h2>
       <h2> val = {props.val2}</h2>
       <p> val= {props.val3}</p>
       <h3>val= {props.sName}</h3>
  
      </div>
    )
    } 
    export function  About(){
        return(
           <div>
            Hello from about component
           </div>
        )
    }
    
    export default Home;