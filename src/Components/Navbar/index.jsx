import React, {useState} from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import {Dehaze} from "@material-ui/icons"
import "./style.css";

const Navbar = ({children}) => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <>
      <AppBar position="static" className="nav_container">
        <Toolbar className="navbar">
          <Typography className="logo_text" variant="h6">
            Siddhant
          </Typography>

          <span className={`d-none d-md-flex ${'nav_items'}`}>
            <a href="#" className="me-md-4 me-2">Projects</a>
            <a href="#" className="me-md-4 me-2">Skills</a>
            <a href="#" className="me-md-4 me-2">Experience</a>
            <a href="#" className="me-md-4 me-2">Contact</a>
            <a href="#about" className="me-md-4 me-2">About</a>
          </span>

          <IconButton onClick={() => setMobileNavOpen(!mobileNavOpen)} className="d-block d-md-none"><Dehaze /></IconButton>
        </Toolbar>
      </AppBar>

      <div className={`mobile_nav ${mobileNavOpen ? 'showMobileNav' : 'hideMobileNav'} d-md-none`}>
        <a href="#" className="py-4 my-3">Projects</a>
        <a href="#" className="py-4 my-3">Skills</a>
        <a href="#" className="py-4 my-3">Experience</a>
        <a href="#" className="py-4 my-3">Contact</a>
        <a href="#about" className="py-4 my-3 ">About</a>
      </div>
      
      {children}
    </>
  );
};

export default Navbar;
