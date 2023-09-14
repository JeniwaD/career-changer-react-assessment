import React from "react";

const EditableRow = ({ 
    editFormData, 
    handleEditFormChange, 
    handleCancelClick, 
}) => {
    return (
    <tr>
      <td>
        <input 
          type="text"
          required="required"
          placeholder="Name"
          name="firstname"
          value={editFormData.firstname}
          onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
        <input 
          type="text"
          required="required"
          placeholder="Last Name"
          name="lastname"
          value={editFormData.lastname}
          onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
        <input 
          type="text"
          required="required"
          placeholder="Position"
          name="position"
          value={editFormData.position}
          onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
        <input 
          type="text"
          required="required"
          placeholder="Action"
          name="action"
          value={editFormData.action}
          onChange={handleEditFormChange}
          ></input>
        </td>
        <td>
            <button type="submit">Save</button>
            <button type="button" onClick={handleCancelClick}>
                Cancel
            </button>
        </td>
    </tr>
    );
};

export default EditableRow;