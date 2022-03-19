import React from 'react'
import PropTypes from "prop-types";

export const GiftGridItem =({title,url}) => {
  
  return (
    <div className='card animate__animated animate__swing'>
        <img src={url} alt={title}></img>
        <p>{title}</p>
    </div>
  )
}

GiftGridItem.propTypes={
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
