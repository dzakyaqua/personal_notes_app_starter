import { useParams } from 'react-router-dom';
import {getNote} from '../utils/local-data'; 
import { showFormattedDate } from '../utils/index';


function DailyDetail() {
  const { id } = useParams();
  const note = getNote(id);

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
