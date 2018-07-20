import React, { Component } from 'react'
import './Notes.css'
import {Collection, CollectionItem, Button, Icon, Card, Input} from "react-materialize";

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
        let displayNotes = this.state.notes.map((text, i) => {
            return (
                <CollectionItem key={"Note-"+i}>
                    <Card className='noteCard'>
                        <div className="noteContent row">
                            <div className="noteText col s10">
                                <p>{text}</p>
                            </div>
                            <div className="noteButons col s2">
                                <Button className="btn-floating waves-effect waves-light" onClick={() => this.deleteNote(i)}><Icon>delete</Icon></Button>
                            </div>
                        </div>
                    </Card>
                </CollectionItem>
            );
        });

        const newNoteHeader = 
            <div className=" newNote row">
                <div className=" noteTextArea col s10">
                    <Input
                        type="textarea"
                        maxlength="200"
                        placeholder='Create a new note!'
                        value={this.state.currentNote}
                        onChange={this.onInputChange}
                    />
                </div>
                <div className=" addNoteBtnDiv col s2">
                    <Button className="addNoteBtn btn-floating waves-effect waves-light" onClick={this.onClick}><Icon>add</Icon></Button>
                </div>
            </div>;

        return (
            <Collection className='Notes' header = {newNoteHeader}>
                {displayNotes}
            </Collection>
        )
    }
}