import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ciws from "../images/ciws.jpg"



class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={ciws}
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href="https://en.wikipedia.org/wiki/USS_Klakring" rel="noopener noreferrer" target="_blank">
          <i className="fa fa-ship" aria-hidden="true"></i>
          </a>

          {/* Youtube */}
          <a href="https://www.navy.com/joining-the-navy" rel="noopener noreferrer" target="_blank">
          <i className="fa fa-anchor" aria-hidden="true"></i>
          </a>

         

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
