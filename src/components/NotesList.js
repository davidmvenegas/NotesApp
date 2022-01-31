import React, { useState } from 'react'
import Note from './Note';
import NotesForm from './NotesForm'

function NotesList() {
    const [notes, setNotes] = useState([])

    const addNote = note => {
        if(!note.text) {
            return
        }
        const newNotes = [note, ...notes]
        setNotes(newNotes)
    }

    const removeNote = id => {
        const removeArr = [...notes].filter(note => note.id !== id)
        setNotes(removeArr)
    }

    const editNote = (noteId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.test)) {
            return;
        }
        setNotes(prev => prev.map(item => (item.id === noteId ? newValue : item)))
    }

    const completeNote = id => {
        let updatedNotes = notes.map(note => {
            if (note.id === id) {
                note.isComplete = !note.isComplete
            }
            return note
        })
        setNotes(updatedNotes)
    }

    return (
        <div>
            <h1 id='titleHYF'>How are you feeling today?</h1>
            <NotesForm onSubmit={addNote} />
            <Note notes={notes} completeNote={completeNote} removeNote={removeNote} editNote={editNote} />
        </div>
    )
}

export default NotesList
