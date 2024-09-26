import { useState } from "react";
import "./App.css";

function NotesArea() {
  const [noteList, setNoteList] = useState([{ value: "ABc" }]);

  const addNotes = () => {
    const newNoteList = [...noteList];
    newNoteList.push({ value: "" });
    setNoteList(newNoteList);
  };

  const handleTextChange = (value, index) => {
    const newNoteList = noteList?.map((note, ind) => {
      if (ind === index) {
        return {
          ...note,
          value: value,
        };
      }
      return note;
    });

    setNoteList(newNoteList);
  };

  const handleDeleteNote = (index) => {
    const newNoteList = noteList.filter((_, ind) => ind !== index);
    setNoteList(newNoteList);
  };

  return (
    <div style={{ padding: "10px" }}>
      <h1 className="heading">Note App</h1>
      <p className="info-text">Double click on a note to remove it</p>

      <div className="flex flex-wrap justify-start items-center gap-10">
        {noteList?.map((note, index) => {
          return (
            <div key={index} className="flex flex-col gap-1 relative">
              <label>Note {index}</label>
              <textarea
                value={note?.value}
                rows={7}
                onChange={(event) => {
                  const value = event.target.value;
                  handleTextChange(value, index);
                }}
                className="bg-gray-200 rounded-md p-5"
              />
              <div
                className="absolute top-5 right-2 bg-red-300 rounded-[50%] h-7 w-7 flex justify-center items-center cursor-pointer"
                onClick={() => {
                  handleDeleteNote(index);
                }}
              >
                <i className="fa-solid fa-minus text-red-700"></i>
              </div>
            </div>
          );
        })}
        <button
          className="btn"
          id="btn"
          onClick={() => {
            addNotes();
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default NotesArea;
