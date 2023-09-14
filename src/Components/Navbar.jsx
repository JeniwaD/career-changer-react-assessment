import React from "react"
import { Link } from 'react-router-dom'
import "./App.css";

const Navbar = () => {

    return(
      <nav id="nav">
          <Link to="/">Home</Link>
          <Link to="/owner">Owner</Link>
      </nav>
    );
}

export default Navbar;

