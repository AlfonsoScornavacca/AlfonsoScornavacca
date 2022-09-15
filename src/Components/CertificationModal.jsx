import React from 'react'
import './Certifications.css'

export const CertificationModal = (props) => {
  return (
    <div className={props.ver}>
        <button onClick={props.cerrar}>❌</button>
      <img src={props.image}  width={'100%'} height={'100%'} /> 
    </div>
  )
}
