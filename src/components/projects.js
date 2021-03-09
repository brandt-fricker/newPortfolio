import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button
 } from "react-mdl";
import weather from "../images/gifs/weathergif.gif"
import burger from "../images/gifs/burger.gif";
import ed from "../images/gifs/employeeD.gif";
import demo from "../images/gifs/budgetTracker.gif";
import recipeApp from "../images/gifs/recipeApp.gif";
import Calgif from "../images/gifs/workdayScheduler.gif";
import "../App.css";

class Projects extends Component {
  render() {
    return (
      <div>
        <div className="projects-grid">
          {/* Project 1 */}
          <Card className='card' col={4} shadow={5} style={{ minWidth: "auto", margin: "auto"}}>
            <CardTitle
              style={{
                color: "#000000",
                height: "auto",
                justifyContent: "center",
              }}
            >
              Eat-Da-Burgaaah
            </CardTitle>
            <img
              src={burger}
              style={{ height: "250px", margin: "0px auto" }}
              alt="Eat-Da-Burgaaah gif"
            />
            <CardText>
              Eat-Da-Burgaaah is a restaurant app that lets users input the
              names of burgers they'd like to eat.
            </CardText>
            <CardActions className="card-buttons" border>
              <a
                href="https://github.com/brandt-fricker/EatBurgers"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>

              <a
                href="https://stark-river-49417.herokuapp.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>Live Demo</Button>
              </a>
            </CardActions>
          </Card>

          {/* Project 2 */}
          <Card className='card' col={4} shadow={5} style={{ minWidth: "auto", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#000000",
                height: "auto",
                justifyContent: "center",
              }}
            >
              Employee Directory
            </CardTitle>
            <img
              src={ed}
              style={{ height: "250px", margin: "0px auto" }}
              alt="Employee Directory gif"
            />
            <CardText>
              Employee Directory is an application that gives the user the
              ability to view a table rendered with their employees and their
              contact information.
            </CardText>
            <CardActions className="card-buttons" border>
              <a
                href="https://github.com/brandt-fricker/super-duper-chainsaw"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>

              <a
                href="https://damp-fjord-75220.herokuapp.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>Live Demo</Button>
              </a>
            </CardActions>
          </Card>

          {/* Project 3 */}
          <Card className='card' col={4} shadow={5} style={{ minWidth: "auto", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#000000",
                height: "auto",
                justifyContent: "center",
              }}
            >
              Budget Tracker
            </CardTitle>
            <img
              src={demo}
              style={{ height: "250px", margin: "0px auto" }}
              alt="Budget Tracker gif"
            />
            <CardText>
              With Budget Tracker users will be able to add expenses and
              deposits to their budget with or without a connection. Once back
              online, the Budget Tracker will update on the next entry.
            </CardText>
            <CardActions className="card-buttons" border>
              <a
                href="https://github.com/brandt-fricker/Budget-Tracker"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>

              <a
                href="https://infinite-brushlands-07543.herokuapp.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>Live Demo</Button>
              </a>
            </CardActions>
          </Card>
        </div>
        <div className="projects-grid">
          {/* Project 4 */}
          <Card className='card' col={4} shadow={5} style={{ minWidth: "auto", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#000000",
                height: "auto",
                justifyContent: "center",
              }}
            >
              Work Day Scheduler
            </CardTitle>
            <img
              src={Calgif}
              style={{ height: "250px", margin: "0px auto" }}
              alt="Work Day Scheduler gif"
            />
            <CardText>
              Always running around like a chicken with your head cut off,
              unsure of what plan or event is next in your busy day? Fortunately
              the Work Day Scheduler is here to help get your head back on and
              add some clarity for you.
            </CardText>
            <CardActions className="card-buttons" border>
              <a
                href="https://github.com/brandt-fricker/workdayCal"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>

              <a
                href="https://brandt-fricker.github.io/Simp-Calendar/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>Live Demo</Button>
              </a>
            </CardActions>
          </Card>
          {/* Project 5 */}
          <Card className='card' col={4} shadow={5} style={{ minWidth: "auto", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#000000",
                height: "auto",
                justifyContent: "center",
              }}
            >
              Recipe App
            </CardTitle>
            <img
              src={recipeApp}
              style={{ height: "250px", margin: "0px auto" }}
              alt="Budget Tracker gif"
            />
            <CardText>
              Most of us have at one point and time had a recipe for something
              that was scribbled down on whatever was handy and within arms
              reach at that time. We wanted somewhere safe to input that recipe
              to avoid wasting time searching for it, deciphering it, and trying
              to replicate it for ourselves.
            </CardText>
            <CardActions className="card-buttons" border>
              <a
                href="https://github.com/brandt-fricker/recipeapps"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>

              <a
                href="https://zw16recipeapp.herokuapp.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>Live Demo</Button>
              </a>
            </CardActions>
          </Card>
          {/* Project 6 */}
          <Card  className='card' col={4} shadow={5} style={{ minWidth: "auto", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#000000",
                height: "auto",
                justifyContent: "center",
              }}
            >
              Weather Dashboard
            </CardTitle>
            <img
              src={weather}
              style={{ height: "250px", margin: "0px auto" }}
              alt="Weather Dashboard gif"
            />
            <CardText>
            Weather Dashboard is a great resource to help out when your traveling or just want to know how to take on the rest of your week. Whether you need to grab your coat and bundle up or are good to go in a t-shirt, the True Weather Dashboard has the information you need!
            </CardText>
            <CardActions className="card-buttons" border>
              <a
                href="https://github.com/brandt-fricker/True_Weather_Dashboard"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>GitHub</Button>
              </a>

              <a
                href="https://brandt-fricker.github.io/True_Weather_Dashboard/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Button colored>Live Demo</Button>
              </a>
            </CardActions>
          </Card>
        </div>
        </div>
      
    );
  }
}

export default Projects;
