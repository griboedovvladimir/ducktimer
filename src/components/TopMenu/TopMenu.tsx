import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actons';
import { guid } from '../../shared/helpers/guid';


class TopMenu extends Component <any> {

    public addTimer = (): void => {
        this.props.addTimer( {id: guid()} )
    };

    public clearTimersBoard = (): void => {
        this.props.removeAllTimers();
    };

    render() {
        return (
            <div id="controlpanel">
                <button title = 'Add' onClick={this.addTimer} id="addTimer" className="controlpanel icon2"></button>
                <button title = 'Load board' id="loadTable" className="controlpanel icon2"></button>
                <button title = 'Save board' id="saveTable" className="controlpanel icon3"></button>
                <button title = 'Clear board' onClick={this.clearTimersBoard} id="clearTable" className="controlpanel icon2"></button>
            </div>
        )
    }
}

const mapStateToProps = ( state: any ) => state;
export default connect( mapStateToProps, {...actions} )( TopMenu );