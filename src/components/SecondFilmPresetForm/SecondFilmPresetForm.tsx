import React, { Component } from 'react';
import { restService } from '../../shared/services/rest.service';
import { API_CONSTANTS } from '../../CONSTANTS';

interface ISecondFilmPresetFormProps {
    formsOptions: string[][];
    firstFormData: any
}

class SecondFilmPresetForm extends Component <ISecondFilmPresetFormProps> {
    public parametersModel = {
        ASAISO: '',
        dilution: '',
        temp: ''
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
        console.log( {...this.parametersModel, ...this.props.firstFormData} );
    };

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
                <button onClick={this.setTime} type="button">Set time</button>
                {/*Time not found, select other parameters*/}
            </div>
        )
    }
}

export default SecondFilmPresetForm;