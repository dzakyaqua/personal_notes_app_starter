import React from 'react';
import DailyItem from './DailyItem';
import EmptyList from './EmptyList';
import PropTypes from 'prop-types';



function DailyList({ dailies }) {
  return (
    <section className={dailies.length > 0 ? 'notes-list' : 'notes-list-empty'}>
      {dailies.length > 0 ? (
        dailies.map((daily) => <DailyItem key={daily.id} {...daily} />)
      ) : (
        <EmptyList />
      )}
    </section>
  );
} 

DailyList.propTypes = {
  dailys: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      body: PropTypes.string
    })
  ).isRequired
}
export default DailyList;

// belum ada mengubah code