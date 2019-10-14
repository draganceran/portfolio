import React from 'react'

const Projects = () => {
  return (
    <div id="projects" className="section has-text-centered">
      <h1 className="subtitle has-text-weight-bold">PROJECTS</h1>

      <div className="section columns projects">
        <div className="column has-text-centered is-half-desktop">
          <h2 className="subtitle has-text-weight-bold">Project 4 - Go,Farm</h2>
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src="images/Go,Farm.png" alt="Go,Farm"/>
              </figure>
            </div>
            <div className="card-content">
              <div className="section projecttext">
                <p>Go farm was created, using React and Python, as a main hub between farmers and customers. After the initial idea, first part was database creation, after that frontend was created and all connected.</p>
                <p>Time frame: 7 days</p>
                <br/><p>Technologies: PostgreSQL, Python, Flask, Pony, HTML, SCSS,Bulma, React, Axios, JWT</p>
                <br/>Github repo: <a href="http://bit.ly/github-gofarm" target="_blank"> http://bit.ly/github-gofarm</a>
              </div>
            </div>
          </div>
        </div>
        <div className="column has-text-centered is-half-desktop">
          <h2 className="subtitle has-text-weight-bold">Project 3 - Project black</h2>
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src="images/Project black.png" alt="Project black"/>
              </figure>
            </div>
            <div className="card-content">
              <div className="section projecttext">
                <p>“Project black” was done from scratch by a team of four. After agreement on subject we split the team in two, one part for backend and one part for frontend (I was in frontend team).
                  <br/>Time frame: 7 days
                  <br/>Technologies: MongoDb, Mongoose, HTML, SCSS,Bulma, React, Axios, JWT, Express,API’s, Git
                  <br/>Github repo: <a href="http://bit.ly/SEI-Project3" target="_blank">http://bit.ly/SEI-Project3 </a>
                  <br/>Hosting: <a href="bit.ly/sei3-projectblack" target="_blank"> bit.ly/sei3-projectblack</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section  columns projects">
        <div className="column has-text-centered is-half-desktop">
          <h2 className="subtitle has-text-weight-bold">Project 2 - Hard duck</h2>
          <div className="card-image">
            <figure className="image is-4by3">
              <img src="images/Hardduck.png" alt="Snake, game"/>
            </figure>
          </div>
          <div className="card-content">
            <div className="section projecttext">
              <p>Pair coding on one laptop for the day and a half. The main task of the project was to display data from the third-party API (Unsplash).
                <br/>Time frame:1.5 day
                <br/>Technologies: HTML, SCSS,Bulma, React, Axios, API, Express, Webpack
                <br/>Github repo: <a href="http://bit.ly/hardduck-git" target="_blank"> http://bit.ly/hardduck-git </a>
                <br/>Hosting: <a href="http://bit.ly/hardduck-env" target="_blank"> http://bit.ly/hardduck-env </a>
              </p>
            </div>
          </div>
        </div>
        <div className="column has-text-centered is-half-desktop">
          <h2 className="subtitle has-text-weight-bold">Project 1 - Snake</h2>
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src="images/Snake.png" alt="Snake, game"/>
              </figure>
            </div>
            <div className="card-content">
              <div className="section projecttext">
                <p>A Vanilla JS recreation of classNameic “Snake” game. After just one week in JS creation of game was a big challenge, especially moving a snake around grid.
                  <br/>Time frame:7 day
                  <br/>Technologies: HTML, SCSS,JavaScript
                  <br/>Github repo: <a href="http://bit.ly/snake-git" target="_blank"> http://bit.ly/snake-git </a>
                  <br/>Hosting: <a href="http://bit.ly/snake-env" target="_blank"> http://bit.ly/snake-env </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Projects
