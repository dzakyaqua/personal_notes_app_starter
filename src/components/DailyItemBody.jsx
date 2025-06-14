import React from 'react';
import PropTypes from 'prop-types';

function ContactItemBody({ name, tag }) {
 return (
   <div className="note-item__body">
     <h3 className="note-item__title">{name}</h3>
     <p className="note-item__username">@{tag}</p>
   </div>
 );
}

ContactItemBody.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
}

export default ContactItemBody;