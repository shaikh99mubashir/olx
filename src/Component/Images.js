import React from 'react'
import olxLogo from '../Images/OLX-Symbol.png'
const Images = (props) => {
  const {images} = props;
    return (
    
    <div>
        <img src={images} alt="" />
    </div>
  )
}

export default Images