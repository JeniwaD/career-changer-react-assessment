import React from "react";
import Navbar from "./Navbar";
import "./App.css";

const Owner = () => {

    return (
    <>
    <Navbar />
     <div id="headline">
      <h1>Barney - Group X - 13</h1>
    </div>

    <div id="owner_img">
        <img src="https://mcdn.wallpapersafari.com/medium/38/78/nUK0J9.jpg" width={400} height={250}/>
    </div>

    <div id="owner_bio">
        <h2>Short Biography: </h2>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
        Excepturi quo molestiae aliquid expedita minima, architecto<br/>
        nisi error nobis totam distinctio, vel quasi temporibus<br />
        obcaecati magnam. Ipsum, aut molestias! Minus, quibusdam.
        </p>
    </div>
    </>
    );
} 

export default Owner;