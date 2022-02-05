import React, {useState} from 'react'
import NotesForm from './NotesForm'
import { RiCloseCircleLine, RiCheckboxCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

function Note({notes, completeNote, removeNote, editNote}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitEdit = value => {
        editNote(edit.id, value)
        setEdit({
            id: null,
            value: '',
        })
    }

    if (edit.id) {
        return <NotesForm edit={edit} onSubmit={submitEdit} />
    }

    return notes.map((note, i) => (
        <div className={note.isComplete ? 'notes-row complete' : 'notes-row'} key={i}>
        <div key={note.id}>{note.text}</div>
            <div className="icons">
            <RiCloseCircleLine className="delete-icon" onClick={() => removeNote(note.id)} />
            <TiEdit className="edit-icon" onClick={() => setEdit({id: note.id, value: note.text})} />
            <RiCheckboxCircleLine className="doneIcon" onClick={() => completeNote(note.id)}/>
            </div>
        </div>
    ))
}

export default Note