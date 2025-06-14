import React from 'react';
import ContactItemBody from './ContactItemBody';
import DeleteButton from './DeleteButton';
import PropTypes from 'prop-types';

function ContactItem({ imageUrl, name, tag, id, onDelete }) {
 return (
   <div className="contact-item">
     <ContactItemBody name={name} tag={tag} />
     <DeleteButton id={id} onDelete={onDelete} />
   </div>
 ); 
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;

// masih belum ada mengubah code