import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
  return (
    <div>
      <form className="note-box">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          className="note-title"
        />

        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          row="3"
          className="note-content"
        />
        <button onClick={submitNote} className="note-button">
          Add
        </button>
      </form>
    </div>
  );
}
export default CreateArea;
