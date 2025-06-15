import React from 'react';
import PropTypes from 'prop-types';


class DailyInput extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      id: '',
      title: '',
      body: '',
      archived: false,
      createdAt: '',
    };


    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onArchivedChangeEventHandler = this.onArchivedChangeEventHandler.bind(this);
    this.onCreatedAtChangeEventHandler = this.onCreatedAtChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);

  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      }
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      }
    });
  }
  onArchivedChangeEventHandler(event) {
    this.setState(() => {
      return {
        archived: event.target.value,
      }
    });
  }
  onCreatedAtChangeEventHandler(event) {
    this.setState(() => {
      return {
        createdAt: event.target.value,
      }
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
   return (
     <form className='note-input' onSubmit={this.onSubmitEventHandler}>
      <input type="text" placeholder="Judul" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
      <textarea placeholder="Isi catatan" value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
      <select value={this.state.archived} onChange={this.onArchivedChangeEventHandler}>
        <option value={false}>Aktif</option>
        <option value={true}>Arsip</option>
      </select>
      <input type="datetime-local" value={this.state.createdAt} onChange={this.onCreatedAtChangeEventHandler} />
      <button type="submit">Tambah</button>
    </form>
   )
 }
 
}

DailyInput.propTypes = {
 addNote: PropTypes.func.isRequired,
}

export default DailyInput;
