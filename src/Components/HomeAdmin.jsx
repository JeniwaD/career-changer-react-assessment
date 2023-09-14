import React, { useState, Fragment }from "react";
import { nanoid } from 'nanoid'; 
import data from "./mock-data.json"; 
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import "./App.css";


const HomeAdmin = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    name: '',
    lastname: '',
    position: '',
  });

  const [editFormData, setEditFormData] = useState({
    name: '',
    lastname: '',
    position: '',
  });

  const [editContactId, setEditContactId] = useState(null);


  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name: addFormData.firstname,
      lastname: addFormData.lastname,
      position: addFormData.position,
    }

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editContact = {
      id: editContactId,
      name: editFormData.name,
      lastname: editFormData.lastname,
      position: editFormData.position,
      action: editFormData.action,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editContact;

    setContacts(newContacts);
    setEditContactId(null)
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      name: contact.name,
      lastname: contact.lastname,
      position: contact.position,
      action: contact.action
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };


  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

    return (
    <>
    <Navbar />
     <div id="headline">
      <h1>Generation Thailand <br />Home - Admin Sector</h1>
    </div>

    <div className="center-container">
      <Link to="/homeuser"><button>User Home Sector</button></Link>
      <Link to="/homeadmin"><button>Admin Home Sector</button></Link>
    </div>

    <div id="create-user">
        <h2>Create User Here</h2>
        <form onSubmit={handleAddFormSubmit}>
          <input 
            type="text"
            name="firstname"
            required="required"
            placeholder="Name"
            onChange={handleAddFormChange}
          />

          <input 
            type="text"
            name="lastname"
            required="required"
            placeholder="Last Name"
            onChange={handleAddFormChange}
          />

          <input 
            type="text"
            name="position"
            required="required"
            placeholder="Position"
            onChange={handleAddFormChange}
          />

          <button type="submit">Save</button>
        </form>
   

   <form onSubmit={handleEditFormSubmit}>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Last Name</th>
          <th>Position</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       {contacts.map((contact) => (
        <Fragment>
          { editContactId === contact.id ? (
          <EditableRow 
          editFormData={editFormData} 
          handleEditFormChange={handleAddFormChange}
          handleCancelClick={handleCancelClick}
          />
          ) : (
          <ReadOnlyRow 
          contact={contact} 
          handleEditClick={handleEditClick}
          handleDeleteClick={handleDeleteClick}
          />
          )}
        </Fragment>
       ))}
      </tbody>
    </table>
    </form>
    

    <div>
      <button>Delete All</button>
    </div>

    </div>
    </>
    );
}

export default HomeAdmin;