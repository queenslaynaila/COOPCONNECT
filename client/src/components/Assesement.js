import React from 'react'
import Assesementcard from './Assesementcard'
export default function Assesement() {
  return (
    <div className="container mt-3">
      <h4 style={{color:"darkblue"}}  >Company Assesement</h4>
      <div>
           <div class="row mb-3">
                <Assesementcard></Assesementcard>
                <Assesementcard></Assesementcard>
                <Assesementcard></Assesementcard>
                <Assesementcard></Assesementcard>
                <Assesementcard></Assesementcard>
                <Assesementcard></Assesementcard>
            </div>
        </div>
    </div>
  )
}
