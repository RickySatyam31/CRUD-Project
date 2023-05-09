import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#FBF8F1",
    height: "auto",
  },
  headerBar: {
    backgroundColor: "#B33030",
    height: 60,
    position: "static",
  },
  tabs: {
    color: "#FFFFFF",
    textDecoration: "none",
    marginRight: 20,
    fontSize: 20,
  },
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <AppBar position="static" className={classes.headerBar}>
        <Toolbar>
          <NavLink to="/" className={classes.tabs}>
            Home
          </NavLink>
          <NavLink to="/all" className={classes.tabs}>
            All Users
          </NavLink>
          <NavLink to="/add" className={classes.tabs}>
            Add User
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
