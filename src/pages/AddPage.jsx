import React from 'react';
import { addNote } from '../utils/local-data';
import DailyInput from '../components/DailyInput';
import { useNavigate } from 'react-router-dom';
 
function AddPage() {
    const navigate = useNavigate();
  function onAddNoteHandler(Daily) {
    addNote(Daily)
    navigate('/');
  }
 
  return (
    <section>
      <h2>Tambah kontak</h2>
      <br/>
      <DailyInput addNote={onAddNoteHandler} />
    </section>
  )
}
 
export default AddPage;

