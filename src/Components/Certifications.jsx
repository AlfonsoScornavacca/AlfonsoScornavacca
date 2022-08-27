import React, { useState } from 'react';
import './Certifications.css'
import Cards from './Cards';
import Azure from '../Images/certifiedAzure.png';
import Js from '../Images/certifiedJS.png';
import JsCertificate from '../Images/JSCertificate.png';
import ReactCertificate from '../Images/ReactCertificate.png';
import HTMLCertificate from '../Images/HTMLCertificate.png';
import teclab from '../Images/teclab.png';
import { CertificationModal } from './CertificationModal';




function Certifications () {
    const [mostrar, setMostrar] = useState(false);

    const [img, setImg] = useState(null);

    const ObtenerMostrar = () => {setMostrar(true); setImg(Azure)};
    const ObtenerMostrarA = () => {setMostrar(true); setImg(Js)};
    const ObtenerMostrarB = () => {setMostrar(true); setImg(JsCertificate)};
    const ObtenerMostrarC = () => {setMostrar(true); setImg(ReactCertificate)};
    const ObtenerMostrarD = () => {setMostrar(true); setImg(HTMLCertificate)};
    
    
    const ocultar = () => setMostrar (false);

    const ObtenerMostrarE = () => {setMostrar(true); setImg(teclab)};
    
    return ( 
    <div className="certi-main">
        <CertificationModal image={img} cerrar={ocultar} ver={mostrar ? 'div-mostrar' : 'ocultar'} />
        <h3>Microsoft</h3>
        <div className='certi-1'>
            <Cards click={ObtenerMostrar} width={630} height={400} clase='cartas'  iimg={Azure}/>
            <Cards click={ObtenerMostrarA} width={630} height={400} clase='cartas'  iimg={Js}/>
        </div>
        <h3>Escuela DevRock</h3>
        <div className='certi-1'>
            <Cards click={ObtenerMostrarB} width={630} height={400} clase='cartas'  iimg={JsCertificate}/>
            <Cards click={ObtenerMostrarC} width={630} height={400} clase='cartas'  iimg={ReactCertificate}/>
        </div>
        <div className='certi-1'>
            <Cards   click={ObtenerMostrarD} width={630} height={400} clase='cartas'  iimg={HTMLCertificate}/>
        </div>
        <h3>Teclab</h3>
        <div className='certi-1'>
            <Cards click={ObtenerMostrarE} className='cartas'  width={400} height={630} iimg={teclab}/>
        </div>
    </div>
    );
}
 
export default Certifications;