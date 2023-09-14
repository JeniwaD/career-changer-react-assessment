import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';
import data from "./mock-data.json"; 
import "./App.css";


const Home = () => {
  const [contacts, setContacts] = useState(data);

    return (
    <>
    <Navbar />
        <div id="headline">
      <h1>Generation Thailand <br />Home - User Sector</h1>
    </div>

    <div id="button">
      <Link to="/homeuser"><button>User Home Sector</button></Link>
      <Link to="/homeadmin"><button>Admin Home Sector</button></Link>
    </div>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Last Name</th>
          <th>Position</th>
        </tr>
      </thead>

      <tbody>
        {contacts.map((contact)=>(
          <tr key={contact.id}>
          <td>{contact.name}</td>
          <td>{contact.lastname}</td>
          <td>{contact.position}</td>
        </tr>
        ))}
      </tbody>
      
    </table>
    </>
    );
}

export default Home;