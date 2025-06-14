import React from 'react';
import ContactItem from './DailyItem';
import PropTypes from 'prop-types';

function DailyList({ dailies, onDelete }) {
  return (
    <div className="contact-list">
      {
        dailies.map((Daily) => (
          <ContactItem 
          key={Daily.id}
          id={Daily.id}
          onDelete={onDelete}
          {...Daily} />
        ))
      }
    </div>
  );
} 

DailyList.propTypes = {
  dailies: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
}
export default DailyList;

// belum ada mengubah code