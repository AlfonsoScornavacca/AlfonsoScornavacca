import React from 'react'
import './Certifications.css'

export const CertificationModalTwo = (props) => {
  return (
    <div className={props.ver}>
        <button onClick={props.cerrar}>❌</button><img src={props.image}  width={700} height={500} /> 
    </div>
  )
}