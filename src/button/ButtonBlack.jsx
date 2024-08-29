import React from 'react'

const ButtonBlack = (props) => {
  return (
    <div>
        <button className='bg-black text-white font-medium px-3 rounded-md py-1'>{props.Text}</button>
    </div>
  )
}

export default ButtonBlack

