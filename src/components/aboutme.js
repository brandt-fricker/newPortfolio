import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import headshot from "../images/headshot.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/DT5WpTYvo1c)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            <Box fontWeight="fontWeightBold">About Me</Box>
          </Typography>
          <Grid container direction="row" justify="center" alignItems="center">
            <img src={headshot} alt="Brandt Fricker" />
          </Grid>
          <Typography ClassName="center" style={{ paddingTop: "10px" }}>
            I was in the Navy for 6 years as a Fire Controlman and was in charge
            of maintaining and operating CIWS on FFG-42 USS Klakring. I've
            traveled all around Europe and South America and am tired of the
            ocean so don't ask me to go on a cruise because I will decline
            faster than you can ask me. After the military I went to school to
            become an Xray Tech, and worked fulltime doing that for a little
            over 3 years. I have 4 amazing crazy kids, 3 girls and 1 boy. I'm
            going on 13 years being married to my amazing and supporting wife.
            We have 1 dog named Bentley, who is 11 and just as crazy as my kids.
            In my freetime I enjoy playing with my kids, which primarily
            involves them beating me up; playing xbox, keeping up to date with
            sports, playing basketball, working out, playing pinochle, and
            cooking.
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
}
