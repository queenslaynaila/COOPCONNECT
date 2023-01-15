import React from 'react'

function Parentcontainer(props) {
  return (
    <div className="main-card">
        {props.children}
    </div>
  )
}

export default Parentcontainer
