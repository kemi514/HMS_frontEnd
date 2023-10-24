import React from 'react'

const Logic = () => {
    let  auth = true
    let age = 12
     return (
        <>
          { 
          auth && age > 18 ? <p>success</p> : <p> failed </p>
        
          }
        </>
      )
}

export default Logic
