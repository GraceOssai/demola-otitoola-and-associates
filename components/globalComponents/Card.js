import React from 'react'

const Card = (props) => {
  return (
    <div className='rounded-2xl h-auto w-[350px] bg-white'>{props.children}</div>
  )
}

export default Card