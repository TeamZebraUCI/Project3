import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
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
        removeNote.splice(i, 1);
        this.setState({ notes: removeNote })
    }
    render() {
        let pinNote = this.state.notes.map((e, i) => {
            return (
                <li key={i}>{e}<button onClick={() => this.deleteNote(i)}>x</button></li>
            );
        });
        return (
            <Paper style={{width: "25%"}}>
            <Paper style={{ paddingBottom: '20px'}}>

                {this.state.notes.length === 0 ? "No notes yet!" : <ul>{pinNote}</ul>}
            </Paper>
            <form>
                <TextField
                    name="AddNote"
                    value={this.state.currentNote}
                    onChange={this.onInputChange}
                    floatingLabelText='Add a Note'
                />
                <FlatButton
                    type="submit"
                    label="Add Note"
                    primary={true}
                    onClick={this.onClick} />
               </form>
                </Paper>
           
            
        )
    }
}