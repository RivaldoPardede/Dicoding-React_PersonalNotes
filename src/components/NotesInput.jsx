/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";

class NotesInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      charLimit: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const inputTitle = event.target.value;
    if (inputTitle.length <= 50) {
      this.setState({
        title: inputTitle,
        charLimit: 50 - inputTitle.length,
      });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState({ body: event.target.value });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    const { title, body } = this.state;
    if (title && body) {
      const newNote = {
        id: +new Date(),
        title,
        body,
        archived: false,
        createdAt: new Date().toISOString(),
      };

      this.props.addNote(newNote);
      this.setState({ title: "", body: "", charLimit: 50 });
    }
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat catatan</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title__char-limit">
            Sisa karakter: {this.state.charLimit}
          </p>
          <input
            className="note-input__title"
            type="text"
            placeholder="Ini adalah judul ..."
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <textarea
            className="note-input__body"
            placeholder="Tuliskan catatanmu di sini ..."
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          />
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default NotesInput;
