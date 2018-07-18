import React, { Component } from 'react'
import './Notes.css'

export default class Notes extends Component {
    constructor() {
        super();
        this.state = {
            notes: [],
            currentNote: ""
        };
    }

    onInputChange = (e) => {
        this.setState({ currentNote: e.target.value });
    }

    onClick = e => {
        e.preventDefault();
        let newNote = this.state.notes.slice();
        newNote.push(this.state.currentNote);


        this.setState({ notes: newNote, currentNote: '' });
    }
    deleteNote = i => {
        let removeNote = this.state.notes.slice();
        removeNote.splice(i , 1);
        this.setState({ notes: removeNote })
    }
    render() {
        let pinNote = this.state.notes.map((e, i) => {
            return (
                <li key={i}>{e}<button onClick={() => this.deleteNote(i)}>x</button></li>
            );
        });
        return (
            <div className='notesArea'>
                {this.state.notes.length === 0 ? "No notes yet!" : <ul>{pinNote}</ul>}
                <br />
                <form>
                    <div className='notes'>
                        <input
                            className='textArea'
                            placeholder='Create a new note!'
                            value={this.state.currentNote}
                            onChange={this.onInputChange}
                            type="text" />
                        <button onClick={this.onClick}>Add</button>
                    </div>
                </form>
            </div>
        )
    }
}