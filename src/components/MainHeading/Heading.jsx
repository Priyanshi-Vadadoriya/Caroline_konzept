import React from 'react'

const Heading = (props) => {
  return (
    <div>
       <h2 className='display-4 heading'>{props.title}</h2>
    </div>
  )
}

export default Heading
