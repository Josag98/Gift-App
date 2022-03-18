import React from 'react'

export const GiftGridItem =({title,url}) => {
  
  return (
    <div className='card animate__animated animate__swing'>
        <img src={url} alt={title}></img>
        <p>{title}</p>
    </div>
  )
}
