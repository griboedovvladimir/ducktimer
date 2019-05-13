import React, { Component } from 'react';
import { restService } from '../../shared/services/rest.service';
import { API_CONSTANTS } from '../../CONSTANTS';
import SecondFilmPresetForm from '../SecondFilmPresetForm/SecondFilmPresetForm';

interface IFilmPresetFormProps {
    formsOptions: string[][];
    id: string[];
}

interface IFilmPresetFormState {
    secondFilmPresetForm: string | null | React.ReactNode;
}

class FilmPresetForm extends Component <IFilmPresetFormProps, IFilmPresetFormState> {
    public filmFormModel = {
        film: '',
        type: '35mm',
        dev: '',
    };

    public state = {
        secondFilmPresetForm: null
    };

    public componentDidMount(): void {
        this.filmFormModel = {
            film: this.props.formsOptions[ 0 ][ 0 ],
            type: '35mm',
            dev: this.props.formsOptions[ 1 ][ 0 ],
        };
    };

    public onChangeFormFields = ( event: React.ChangeEvent<HTMLSelectElement> ): void => {
        switch ( event.target.id ) {
            case 'film-select':
                this.filmFormModel.film = event.target.value;
                break;
            case 'film-type-select':
                this.filmFormModel.type = event.target.value;
                break;
            case 'dev-select':
                this.filmFormModel.dev = event.target.value;
                break;
        }
    };

    public getSecondFilmFormOptions = (): void => {
        this.setSecondFilmPresetForm( 'Loading...' );
        restService.post( API_CONSTANTS.FILM_FORM_SECOND_STEP, this.filmFormModel ).then( resp => resp.json() )
            .then( (data: any) => {
                data === 'false'
                    ? this.setSecondFilmPresetForm( 'Selected film and developer can\'t use together' )
                    : this.setSecondFilmPresetForm( <SecondFilmPresetForm id={this.props.id} firstFormData={this.filmFormModel}
                                                                          formsOptions={data}/> )
            } );
    };

    private setSecondFilmPresetForm( value: string | null | React.ReactNode ) {
        this.setState( {...this.state, secondFilmPresetForm: value} )
    }

    public render(): React.ReactNode {
        const films = this.props.formsOptions[ 0 ].map( film => <option>{film}</option> );
        const developers = this.props.formsOptions[ 1 ].map( developer => <option>{developer}</option> );
        return (
            <form>
                <p>Select film, film type and developer</p>
                <select onChange={this.onChangeFormFields} id="film-select" name="film-select">
                    {films}
                </select>
                <select onChange={this.onChangeFormFields} id="film-type-select" name="film-type-select">
                    <option>35mm</option>
                    <option>120</option>
                    <option>sheet</option>
                </select>
                <select onChange={this.onChangeFormFields} id="dev-select" name="dev-select">
                    {developers}
                </select>
                <button className="trans-color-btn" onClick={this.getSecondFilmFormOptions} type="button">Select</button>
                {this.state.secondFilmPresetForm}
            </form>
        )
    }
}

export default FilmPresetForm;