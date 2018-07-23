import React, { Component } from 'react';
import {Collection, CollectionItem, Button, Icon, Card, Input} from "react-materialize";
import './Notes.css';

class Notes extends Component {
    state = {
        currentNote: ""
    };

    onInputChange = (event) => {
        this.setState({ currentNote: event.target.value });
    }

    // onClick = e => {
    //     e.preventDefault();
    //     let newNote = this.state.notes.slice();
    //     newNote.push(this.state.currentNote);

    //     this.setState({ notes: newNote, currentNote: '' });
    // }

    // deleteNote = i => {
    //     let removeNote = this.state.notes.slice();
    //     removeNote.splice(i , 1);
    //     this.setState({ notes: removeNote })
    // }
    addNoteBtn = ()=>{
        this.props.handleAddNote(this.state.currentNote)
        this.setState({currentNote:""});
    };


    render() {
        // let displayNotes = this.state.notes.map((text, i) => {
        let displayNotes = this.props.notes.map((text, i) => {
                return (
                <CollectionItem key={"Note-"+i}>
                    <Card className='noteCard'>
                        <div className="noteContent row">
                            <div className="noteText col s10">
                                {text}
                            </div>
                            <div className="noteButons col s2">
                                <Button className="btn-floating waves-effect waves-light" onClick={() => this.props.handleDeleteNote(i)}><Icon>delete</Icon></Button>
                            </div>
                        </div>
                    </Card>
                </CollectionItem>
            );
        });

        const newNoteHeader = 
            <div className=" newNote row">
                <div className="noteTextArea col s10">
                    <h5> Notes: </h5>
                    <Input
                        className="noteInput"
                        type="textarea"
                        maxlength="200"
                        placeholder='Create a new note!'
                        value={this.state.currentNote}
                        onChange={this.onInputChange}
                    />
                </div>
                <div className=" addNoteBtnDiv col s2">
                    <Button className="addNoteBtn btn-floating waves-effect waves-light" onClick={()=>{this.addNoteBtn()}}><Icon>add</Icon></Button>
                </div>
            </div>;

        return (
            <Collection className='Notes' header = {newNoteHeader}>
                {displayNotes}
            </Collection>
        );
    }
};

export default Notes;