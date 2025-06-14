import React from 'react';
import parser from 'html-react-parser';
import { Link } from 'react-router-dom';
import { formatDate } from '../utils/local-data';
import PropTypes from 'prop-types';

function DailyItem({ id, title, createdAt, body }) {
  return (
    <article className="note-item">
      <h3 className="note-item__title">
        <Link to={`/notes/${id}`}>{title}</Link>
      </h3>
      <p className="note-item__createdAt">{formatDate(createdAt)}</p>
      <p className="note-item__body">{body ? parser(body) : 'Tidak ada konten'}</p>
    </article>
  );
}

DailyItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string
};


export default DailyItem;
// masih belum ada mengubah code