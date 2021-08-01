import React, { useReducer, useEffect } from 'react'
import notesReducer from '../reducers/notesReducer'
import NoteList from './NoteList'
import AddNoteForm from './AddNoteForm'
import NotesContext from '../context/notes-context'

const NoteApp = () => {

    const [notes, dispatch] = useReducer(notesReducer, [])

    useEffect(() => {
        const notes = JSON.parse(localStorage.getItem('notes'))
        dispatch({ type: 'POPULATE_NOTES', notes })
    }, [])

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    return (
        <NotesContext.Provider value={{ notes, dispatch }}>
            <AddNoteForm />
            <NoteList />
        </NotesContext.Provider>
    )
}

export { NoteApp as default }