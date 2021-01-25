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
                frickerbrandt@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-github" aria-hidden="true"/>
                    github.com/brandt-fricker
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                    linkedin.com/in/brandtfricker123/
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
