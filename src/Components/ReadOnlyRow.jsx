import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handDeleteClick }) => {
    return (
      <tr>
      <td>{contact.name}</td>
      <td>{contact.lastname}</td>
      <td>{contact.position}</td>
      <td>{contact.action}</td>
      <td>
        <button type="button" 
        onClick={(event)=> handleEditClick(event, contact)}
      >
        Edit
      </button>
      <button type="button" onClick={() => handDeleteClick(contact.id)}>
        Delete
      </button>
      </td>
      </tr>
    );
};

export default ReadOnlyRow;