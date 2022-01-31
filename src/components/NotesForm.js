import React, { useState, useEffect, useRef, Fragment } from 'react'

function NotesForm(props) {
const [input, setInput] = useState(props.edit ? props.edit.value : '')
const inputRef = useRef(null)

useEffect(() => {
    inputRef.current.focus()
})

const handleChange = e => {
    setInput(e.target.value)
}

const handleSubmit = e => {
    e.preventDefault()

    props.onSubmit({
        id: Math.floor(Math.random() * 1000000),
        text: input,
    })

    setInput('')
}

    return (
        <form className="notes-form" onSubmit={handleSubmit}>
        {props.edit ? (
            <Fragment>
            <input className="notes-input edit" type="text" placeholder="Edit your note..." value={input} name="text" onChange={handleChange} ref={inputRef} />
            <button className="notes-button edit">Edit</button>
            </Fragment>
        ) : (
            <Fragment>
            <input className="notes-input" type="text" placeholder="Add a note..." value={input} name="text" onChange={handleChange} ref={inputRef} />
            <button className="notes-button">Add Note</button>
            </Fragment>
        )
        }
        </form>
    )
}

export default NotesForm