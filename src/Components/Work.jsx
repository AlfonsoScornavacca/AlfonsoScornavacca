import React from 'react'
import './Work.css'

export default function Work() {
    // eslint-disable-next-line no-unused-vars
    const openInNewTab = (url) => { const newWindow = window.open(url, '_blank', 'noopener,noreferrer') }
  return (
    <div className='main-work'>
      <div className='secondary-work'>
        <span className='title'>Radium Rocket</span>
        <p className='parrafo'>
          I worked in this company for 4 months. <br /><br/>
          It was a team project (10 developers) and we developed an app using React for the front and Express for the back. <br/> <br/>
          MongoDB was also used to create the database. <br /> <br/>
          Other tools used in this project: Postman, Git, Github, Slack.
        </p>
        <span id='repositories'>Repositories:</span>
        <div className='button-container'>
          <span className='repos' onClick={()=>openInNewTab('https://github.com/AlfonsoScornavacca/BackendMindSet')}>👉 Backend</span>
          <span className='repos' onClick={()=>openInNewTab('https://github.com/AlfonsoScornavacca/FrontendMindSet')}>👉 Frontend</span>
        </div>
      </div>
      <div className='secondary-work'>
      <span className='title'>Raona</span>
        <p className='parrafo'>
        I currently work here. <br/><br/>
        I developing apps for companies such as CEPSA, Rural Servicios Informaticos, ContecNow and others.<br/><br/>
        Some projects used PowerApp and Power Automate.<br/><br/>
        Others projects React and Sharepoint like the small example below, which was developed for the company Raona
        </p>
        <span id='repositories-a' >Repositories:</span>
        <div className='button-container'>
          <span className='repos' onClick={()=>openInNewTab('https://github.com/AlfonsoScornavacca/WebPartBirthDay')}>👉 React-Sharepoint</span>
        </div>
      </div>
    </div>
  )
}
