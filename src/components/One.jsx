import React from 'react'
import { Link } from 'react-router-dom'

const One = () => {
  return (
    <Link to='swap'>
      <div style={{color: 'red', marginTop: '-40rem'}}>One</div>
    </Link>
  )
}

export default One