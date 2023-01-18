import React from 'react'
import { useParams } from 'react-router-dom'
import Viewaseeker from '../Viewaseeker';
export default function Viewseeker({seekers}) {
    const params= useParams()
    const  seeker = seekers.find((job) => job.id === Number(params.id));
    let me="https://media.geeksforgeeks.org/wp-content/uploads/20220202083519/gfglogo.png"

  return (
     <Viewaseeker seeker={seeker}></Viewaseeker>
  )
}

