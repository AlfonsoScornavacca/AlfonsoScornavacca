import React from 'react'
import './Work.css'

export default function Work() {
    // eslint-disable-next-line no-unused-vars
    const openInNewTab = (url) => { const newWindow = window.open(url, '_blank', 'noopener,noreferrer') }
  return (
    <div className='main-work'>
      <div className='secondary-work'>
        <span className='title'>Radium Rocket</span>
        <p>
          I worked in this company for 4 months. <br />
          It was a team project (10 developers) and we developed an app using React for the front and Express for the back. <br/>
          MongoDB was also used to create the database. <br />
          Other tools used in this project: Postman, Git, Github, Slack.
        </p>
        <label>You can see the repositories in the links below</label>
        <span id='repositories'>Repositories:</span>
        <span className='repos' onClick={()=>openInNewTab('https://github.com/AlfonsoScornavacca/BackendMindSet')}>👉 Backend</span>
        <span className='repos' onClick={()=>openInNewTab('https://github.com/AlfonsoScornavacca/FrontendMindSet')}>👉 Frontend</span>
      </div>
      <div className='secondary-work'>
      <span className='title'>Raona</span>
        <p>
        I currently work here
        </p>
      </div>
    </div>
  )
}
