/*import './App.css';

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;*/

import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
 
const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'This is my first note!',
      date: '25/02/2023',
    },
    {
        id: nanoid(),
        text: 'This is my second note',
        date: '25/02/2023',
    },
    {
        id: nanoid(),
        text: 'This is my third one',
        date: '25/02/2023',
    },
    {
      id: nanoid(),
      text: 'new one',
      date: '25/02/2023',
    },
  ]);

  const addNote = (text) => {
    const  date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  
  const deleteNote = (id) => {
    const newNotes = notes.filter((note)=>note.id !== id);
    setNotes(newNotes);
  }

    return (
        <div className='container'>
              <Search />
              <NotesList
                  notes={notes}
                  handleAddNote={addNote} 
                  handleDeleteNote={deleteNote}
              />
        </div>
    );
  };

export default App;
