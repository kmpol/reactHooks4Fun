import React, { useContext } from 'react'
import Note from './Note'
import notesContext from '../context/notes-context'

const NoteList = () => {
    const { notes } = useContext(notesContext)

    return notes.map((note) => (
        <Note key={note.title} note={note} />
    ))
}

export { NoteList as default }