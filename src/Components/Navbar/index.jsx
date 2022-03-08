import React, {useState} from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import {MenuOpen} from "@material-ui/icons"
import "./style.css";

const Navbar = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <>
      <AppBar position="static" className="nav_container">
        <Toolbar className="navbar">
          <Typography className="logo_text" variant="h6">
            Siddhant
          </Typography>

          <span className="d-none d-md-flex">
            <Typography className="me-md-4 me-2">Projects</Typography>
            <Typography className="me-md-4 me-2">Contact</Typography>
            <Typography className="me-md-4 me-2">About</Typography>
          </span>

          <IconButton onClick={() => setMobileNavOpen(!mobileNavOpen)} className="d-block d-md-none"><MenuOpen /></IconButton>
        </Toolbar>
      </AppBar>

      <div className={`mobile_nav ${mobileNavOpen ? 'showMobileNav' : 'hideMobileNav'} d-md-none`}>
        <Typography className="py-4 my-3">Projects</Typography>
        <Typography className="py-4 my-3">Contact</Typography>
        <Typography className="py-4 my-3 ">About</Typography>
      </div>
    </>
  );
};

export default Navbar;
