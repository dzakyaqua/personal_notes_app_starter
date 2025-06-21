import React from 'react';
import parser from 'html-react-parser';
import { Link } from 'react-router-dom';
import { showFormattedDate } from '../utils/index';
import PropTypes from 'prop-types';
import DeleteButton from './DeleteButton';


function DailyItem({ id, title, createdAt, body, onDelete }) {
  return (

    <article className="note-item">
      <h3 className="note-item__title">
        <Link to={`/notes/${id}`}>{title}</Link>
      </h3>
      <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="note-item__body">{body ? parser(body) : 'Tidak ada konten'}</p>
      <DeleteButton id={id} onDelete={onDelete} />
    </article>
    
  );
}

DailyItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};



export default DailyItem;

