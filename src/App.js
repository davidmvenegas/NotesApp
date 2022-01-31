import React from "react"
import NotesList from "./components/NotesList"

function App() {
  return (
    <div className="notes-app">
      <h1 id="title">Notes App</h1>
        <NotesList />
      <p id="footer">Built with &#10084; by <a href="https://www.davidmvenegas.com" target="_blank" rel="noopener noreferrer">David Venegas</a></p>
    </div>
  )
}

export default App;