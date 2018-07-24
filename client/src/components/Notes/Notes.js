import React, { Component } from 'react';
import {Collection, CollectionItem, Button, Icon, Card, Input,Dropdown,NavItem} from "react-materialize";
import './Notes.css';

class Notes extends Component {
    state = {
        currentNote: "",
        editedNote:"",
        editedNoteIndex:null,
        editingNote:false
    };

    onNewNoteInputChange = (event) => {
        this.setState({ currentNote: event.target.value });
    }
    
    onEditNoteInputChange = (event) => {
        this.setState({ editedNote: event.target.value });
    }

    addNoteBtn = ()=>{
        this.props.handleAddNote(this.state.currentNote)
        this.setState({currentNote:""});
    };

    editNoteBtn = (note,i)=>{
        if(!this.state.editingNote){
            const noteIndex = ((this.props.notes.length-1) - i);
            this.props.handleEditNote(noteIndex);
            this.setState({
                editedNoteIndex:noteIndex,
                editedNote:note.text,
                editingNote:true
            })
        }else{
            console.log("Note already being edited");
        }
    };

    saveEditBtn = (note,i)=>{
        console.log("SAVING EDITS");
        const noteIndex = ((this.props.notes.length-1) - i);
        this.props.handleUpdateNote(this.state.editedNote,noteIndex);
        this.setState({
            editedNoteIndex:null,
            editedNote:"",
            editingNote:false
        });
    };

    cancleEditBtn = (note,i)=>{
        this.setState({
            editedNoteIndex:null,
            editedNote:"",
            editingNote:false
        });
        const noteIndex = ((this.props.notes.length-1) - i);
        this.props.handleCancleEditNote(noteIndex);
    }


    makeCard = (note,i)=>{
        if (note.beingEdited){
            return(
                <Card className='noteCard'>
                <div className="noteContent row">
                    <div className="noteText col s10">
                    <Input
                        className="noteInput"
                        type="textarea"
                        maxlength="200"
                        value={this.state.editedNote}
                        onChange={this.onEditNoteInputChange}>
                    </Input>
                    </div>
                    <div className="noteButons col s2">
                        <Button className="btn-floating waves-effect waves-light" 
                            onClick={() => this.saveEditBtn(note,i)}>
                            <Icon>save</Icon>
                        </Button>
                        <Button className="btn-floating waves-effect waves-light" 
                            onClick={() => this.cancleEditBtn(note,i)}>
                            <Icon>clear</Icon>
                        </Button>
                    </div>
                </div>
            </Card>
            );
        }
        return (
            <Card className='noteCard'>
                <div className="noteContent row">
                    <div className="noteText col s10">
                        {note.text}
                    </div>
                    <div className="noteButons col s2">
                        <Button className="btn-floating waves-effect waves-light" 
                            onClick={() => this.props.handleDeleteNote(((this.props.notes.length-1) - i))}>
                            <Icon>delete</Icon>
                        </Button>
                        <Button className="btn-floating waves-effect waves-light" 
                            onClick={() => this.editNoteBtn(note,i)}>
                            <Icon>edit</Icon>
                        </Button>
                    </div>
                </div>
            </Card>
        );
    }

    render() {
        let displayNotes = this.props.notes.slice(0).reverse().map((noteObj, i) => {
            return (
            <CollectionItem key={"Note-"+i}>
                {this.makeCard(noteObj,i)}
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
                        onChange={this.onNewNoteInputChange}
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