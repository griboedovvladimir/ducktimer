import React, { Component } from 'react';
import { restService } from '../../shared/services/rest.service';
import { API_CONSTANTS } from '../../CONSTANTS';
import { parseMinutsIntoReadableTime } from '../../shared/helpers/parseMinutsIntoReadableTime';
import { connect } from 'react-redux';
import * as actions from '../../redux/actons';

interface ISecondFilmPresetFormProps {
    formsOptions: string[][];
    firstFormData: any;
    setTime: (data: any)=>{};
    id: string;
}

interface ISecondFilmPresetFormState {
    stateMessage: string | null
}



class SecondFilmPresetForm extends Component <ISecondFilmPresetFormProps, ISecondFilmPresetFormState> {
    public parametersModel = {
        ASAISO: '',
        dilution: '',
        temp: ''
    };
    public state = {
        stateMessage: ''
    };

    public componentDidMount(): void {
        this.parametersModel = {
            ASAISO: this.props.formsOptions[ 1 ][ 0 ],
            dilution: this.props.formsOptions[ 0 ][ 0 ],
            temp: this.props.formsOptions[ 2 ][ 0 ]
        }
    }

    public onChangeFormFields = ( event: React.ChangeEvent<HTMLSelectElement> ): void => {
        switch ( event.target.name ) {
            case 'iso':
                this.parametersModel.ASAISO = event.target.value;
                break;
            case 'dilution':
                this.parametersModel.dilution = event.target.value;
                break;
            case 'temp':
                this.parametersModel.temp = event.target.value;
                break;
        }
    };

    public setTime = () => {
        this.setStateMessage( 'Loading...' );
                restService.post( API_CONSTANTS.GET_TIME_BY_PARAMS, {...this.parametersModel, ...this.props.firstFormData} )
                    .then( response => response.json() )
                    .then( data => {
                        if ( data === 'false' ) {
                            this.setStateMessage( 'Time not found, select other parameters' );
                        } else {
                            this.setStateMessage( null );
                            this.props.setTime( {time:parseMinutsIntoReadableTime(data), id: this.props.id});
                        }
                    } );
    };

    private setStateMessage( value: string | null ) {
        this.setState( {...this.state, stateMessage: value} )
    }

    public render(): React.ReactNode {
        const dilution = this.props.formsOptions[ 0 ].map( dilution => <option>{dilution}</option> );
        const iso = this.props.formsOptions[ 1 ].map( iso => <option>{iso}</option> );
        const temp = this.props.formsOptions[ 2 ].map( temp => <option>{temp}</option> );
        return (
            <div>
                <div>Select parameters
                    <p>
                        <span>ISO/ASA</span>
                        <span>dilution</span>
                        <span>temperature</span>
                    </p>
                </div>
                <select name="iso" id="iso">{iso}</select>
                <select name="dilution" id="dilution">{dilution}</select>
                <select name="temp" id="temp">{temp}</select>
                <button className="trans-color-btn" onClick={this.setTime} type="button">Set time</button>
                {this.state.stateMessage}
            </div>
        )
    }
}

const mapStateToProps = ( state: any, ownProps: any ) => ( {...state, ...ownProps} );
export default connect( mapStateToProps, {...actions} )( SecondFilmPresetForm );