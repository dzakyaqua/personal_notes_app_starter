import React from 'react';
import { addNote } from '../utils/network-data';

class DailyInput extends React.Component {
  constructor(props) {
    super(props);

    
    this.state = {
      title: '',
      body: '',
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState({ title: event.target.value });
  }

  onBodyChangeEventHandler(event) {
    this.setState({ body: event.target.value });
  }

  async onSubmitEventHandler(event) {
    event.preventDefault();

    const { title, body } = this.state;

    console.log('Title:', title);
  console.log('Body:', body);
  console.log('Token:', localStorage.getItem('accessToken'));

    if (!title.trim() || !body.trim()) {
      alert('Judul dan isi tidak boleh kosong!');
      return;
    }

    const result = await addNote({ title, body });
      console.log('API Result:', result);

    if (!result.error) {
      alert('Catatan berhasil ditambahkan!');
      this.setState({ title: '', body: '' });
    } else {
      alert('Gagal menambahkan catatan: ' + result.message); // Tampilkan pesan error
    }
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <input
          type="text"
          placeholder="Judul"
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
        />
        <textarea
          placeholder="Isi catatan"
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
        ></textarea>
        <button type="submit">Tambah</button>
      </form>
    );
  }
}

export default DailyInput;
