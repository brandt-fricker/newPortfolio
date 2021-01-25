import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import edb from "../images/eatDaBurgaaah.gif";


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
            <CardActions border>
              <Button colored>GitHub</Button>
              
              <Button colored>Live Demo</Button>
            </CardActions>
          </Card>

        
          <Card col={4} shadow={5} 
          style={{minWidth: '450', margin: 'auto'}}
          >
            <CardTitle style={{color: '#000000', height: 'auto', justifyContent: 'center'}}>Eat-Da-Burgaaah</CardTitle>
            <img src={edb}
            style={{height: '250px',margin: "0px auto"}}/>
            <CardText>
            Eat-Da-Burgaaah is a restaurant app that lets users input the names of burgers they'd like to eat.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
             
              <Button colored>Live Demo</Button>
            </CardActions>
          </Card>
            <Card col={4} shadow={5} 
            style={{minWidth: '450', margin: 'auto'}}
            >
            <CardTitle style={{color: '#000000', height: 'auto', justifyContent: 'center'}}>Eat-Da-Burgaaah</CardTitle>
            <img src={edb}
            style={{height: '250px',margin: "0px auto"}}/>
            <CardText>
            Eat-Da-Burgaaah is a restaurant app that lets users input the names of burgers they'd like to eat.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              
              <Button colored>Live Demo</Button>
            </CardActions>
          </Card>
        </div>
        {/* <div className="projects-grid">
            <Card col={4} shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000000', height: '176px'}}>Eat-Da-Burgaaah</CardTitle>
            <img src={edb}
            style={{height: '250px'}}/>
            <CardText>
            Eat-Da-Burgaaah is a restaurant app that lets users input the names of burgers they'd like to eat.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
          </Card>
          <Card col={4} shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000000', height: '176px'}}>Eat-Da-Burgaaah</CardTitle>
            <img src={edb}
            style={{height: '250px'}}/>
            <CardText>
            Eat-Da-Burgaaah is a restaurant app that lets users input the names of burgers they'd like to eat.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
          </Card>
          <Card col={4} shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000000', height: '176px'}}>Eat-Da-Burgaaah</CardTitle>
            <img src={edb}
            style={{height: '250px'}}/>
            <CardText>
            Eat-Da-Burgaaah is a restaurant app that lets users input the names of burgers they'd like to eat.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
          </Card>
        </div> */}

</div>
      )
      
   
  }



  }


export default Projects;
