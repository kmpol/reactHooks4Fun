import React, { useState, useContext } from 'react'
import NotesContext from '../context/notes-context'

const AddNoteForm = () => {

    const { dispatch } = useContext(NotesContext)

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const addNote = (e) => {
        e.preventDefault()
        dispatch({ type: 'ADD_NOTE', note: { title, body } })
        setTitle('')
        setBody('')
    }

    return (
        <div>
            <h1> Note App </h1>
            <form onSubmit={addNote}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="title" />
                <input value={body} onChange={(e) => setBody(e.target.value)} placeholder="body" />
                <button type="submit">Add Note</button>
            </form>
        </div>
    )
}

export { AddNoteForm as default }