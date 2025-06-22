import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getNote } from '../utils/network-data';
import { showFormattedDate } from '../utils/index';

function DailyDetail() {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNote() {
      const response = await getNote(id);
      if (!response.error) {
        setNote(response.data);
      }
      setLoading(false);
    }

    fetchNote();
  }, [id]);

  if (loading) {
    return <p>Memuat catatan...</p>;
  }

  if (!note) {
    return <p>Catatan tidak ditemukan.</p>;
  }

  return (
    <div className="note-detail">
      <h2>{note.title}</h2>
      <p>{showFormattedDate(note.createdAt)}</p>
      <p>{note.body}</p>
    </div>
  );
}

export default DailyDetail;
