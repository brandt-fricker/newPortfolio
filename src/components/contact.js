import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import klakring from "../images/ussklakring.jpg"
import crest from "../images/crest.png"

class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (480) 544-4443
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                <a href="mailto:frickerbrandt@gmail.com">frickerbrandt@gmail.com</a>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-github" aria-hidden="true"/>
                    <a href="https://github.com/brandt-fricker">github.com/brandt-fricker</a>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                    <a href="https://www.linkedin.com/in/brandtfricker123/">linkedin.com/in/brandtfricker123/</a>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-file-text" aria-hidden="true"/>
                    <a
              href="https://docs.google.com/document/d/1rV32ngNddpru3O2s5ckqvybFHCBEnDdVAKF9o5tnWEo/edit?usp=sharing"
              >Download or view my resume (pdf)</a>
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
          <Cell col={6}>
            <h2>Brandt Fricker</h2>
            <img className="boat"
              src={klakring}
              alt="FFG-42 USS KLAKRING"
              style={{height: '250px'}}
              />
               <hr style={{borderStyle: "hidden"}}/>
               <img className="boat"
              src={crest}
              alt="FFG-42 USS KLAKRING CREST"
              style={{height: '250px'}}
               />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
