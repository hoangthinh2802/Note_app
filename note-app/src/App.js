import { useState } from "react";
import {nanoid} from 'nanoid';
import NotesList from "./components/NotesList";

  const App = () => {
    const [notes, setNotes] = useState([
      {
      id: nanoid(),
      text: "this is my first note!",
      date: "20/12/2022"
      },
      {
        id: nanoid(),
        text: "this is my second note!",
        date: "20/12/2022"
      },
      {
        id: nanoid(),
        text: "this is my third note!",
        date: "20/12/2022"
      },
    ]);

    const addNote = (text) => {
      console.log(text);
    }

    return (
      <div className="container">
        <NotesList notes={notes} handleAddNote={addNote}/>      
      </div>
    );
  };

  export default App;
