import React from 'react'

function Card(props) {
  return (
    <div className='outer-jobview-card'>
      {props.children}
    </div>
  )
}

export default Card
