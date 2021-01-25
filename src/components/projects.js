import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import edb from "../images/eatDaBurgaaah.gif";
import ed from "../images/ed.png"
import demo from "../images/Demo.gif";
import '../App.css';


class Projects extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { activeTab: 0 };
  // }

  // toggleCategories() {

    render(){
      return(
      <div>
        <div className="projects-grid">

          {/* Project 1 */}
          <Card col={4} shadow={5} 
          style={{minWidth: 'auto', margin: 'auto'}}
          >
            <CardTitle style={{color: '#000000', height: 'auto', justifyContent: 'center'}}>Eat-Da-Burgaaah</CardTitle>
            <img src={edb}
            style={{height: '250px',margin: "0px auto"}}/>
            <CardText>
            Eat-Da-Burgaaah is a restaurant app that lets users input the names of burgers they'd like to eat.
            </CardText>
            <CardActions className="card-buttons"border>
            <a href="#/" target="_blank"><Button colored>GitHub</Button></a>
              
              <a href="#/" target="_blank"><Button colored>Live Demo
              </Button></a>
            </CardActions>
          </Card>

        {/* Project 2 */}
          <Card col={4} shadow={5} 
          style={{minWidth: 'auto', margin: 'auto'}}
          >
            <CardTitle style={{color: '#000000', height: 'auto', justifyContent: 'center'}}>Employee Directory</CardTitle>
            <img src={ed}
            style={{height: '250px',margin: "0px auto", border: '5px solid white'}}
            />
            <CardText>
           Employee Directory is an application that gives the user the ability to view a table rendered with their employees and their contact information.
            </CardText>
            <CardActions className="card-buttons"border>
            <a href="#/" target="_blank"><Button colored>GitHub</Button></a>
              
              <a href="#/" target="_blank"><Button colored>Live Demo
              </Button></a>
            </CardActions>
          </Card>

          {/* Project 3 */}
            <Card col={4} shadow={5} 
            style={{minWidth: 'auto', margin: 'auto'}}
            >
            <CardTitle style={{color: '#000000', height: 'auto', justifyContent: 'center'}}>Eat-Da-Burgaaah</CardTitle>
            <img src={demo}
            style={{height: '250px',margin: "0px auto"}}/>
            <CardText>
            Eat-Da-Burgaaah is a restaurant app that lets users input the names of burgers they'd like to eat.
            </CardText>
            <CardActions className="card-buttons"border>
            <a href="#/" target="_blank"><Button colored>GitHub</Button></a>
              
              <a href="#/" target="_blank"><Button colored>Live Demo
              </Button></a>
            </CardActions>
          </Card>
        </div>
{/* <div className="projects-grid"> */}
        {/* Project 4 */}
        {/* Project 5 */}
        {/* Project 6 */}

        {/* </div> */}



        

</div>
      )
      
   
  }



  }


export default Projects;
