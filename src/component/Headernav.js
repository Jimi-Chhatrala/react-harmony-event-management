import React from 'react'
import { useNavigate } from 'react-router-dom'

function Headernav() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>
        <ul>
          <li  onClick={()=>navigate('/')}   >Home </li>
          <li   onClick={()=>navigate('/about')}  >About </li>
          <li    onClick={()=>navigate('/login')}   >Login </li>
        </ul>
      </h1>
    </div>
  )
}

export default Headernav