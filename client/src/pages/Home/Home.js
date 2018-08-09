import React, { Component } from "react";
import "./Home.css";

// import components
import TickerList from "../../components/TickerList";
import Chart from "../../components/Chart";
import Notes from "../../components/Notes";
import SaveButton from "../../components/SaveButton";

//===============================================================================================================================================

class Home extends Component {
    selectTicker = (tickerObj) => {
        console.log(tickerObj);
    };

    showSaveButton = ()=>{
        if(this.props.username){
            return <SaveButton/>;
        }
        return;
    };

    render() {
        return (
            <div className="Home row">
                <div className="col s3 mycol1">
                    <TickerList
                        tickerList = {this.props.tickerList}
                        handleSelectTicker={this.props.handleSelectTicker}
                        handleSearchTicker = {this.props.handleSearchTicker}
                        />
                    {this.showSaveButton()}
                </div>
                <div className="col s9 mycol2">
                    <div className="row ChartDiv">
                        <Chart
                            selectedTickers = {this.props.selectedTickers}
                            handleRemoveChip = {this.props.handleRemoveChip}
                        />
                    </div>
                    <div className="row NotesDiv">
                        <Notes
                            notes = {this.props.notes}
                            handleAddNote={this.props.handleAddNote}
                            handleDeleteNote = {this.props.handleDeleteNote}
                            handleEditNote = {this.props.handleEditNote}
                            handleUpdateNote = {this.props.handleUpdateNote}
                            handleCancleEditNote = {this.props.handleCancleEditNote}
                        />
                    </div>
                </div>
            </div>
        );
    }
};

export default Home;