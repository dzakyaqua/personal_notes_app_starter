import React from 'react';
import PropTypes from 'prop-types';
import { IoCloseSharp } from "react-icons/io5";

function DeleteButton({ id, onDelete }) {
  return <button className='note-item__delete' onClick={() => onDelete(id)}><IoCloseSharp/></button>
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,  
  onDelete: PropTypes.func.isRequired,
}


export default DeleteButton;