import React, { Component } from 'react';
import { restService } from '../../shared/services/rest.service';
import { API_CONSTANTS } from '../../CONSTANTS';
import SecondFilmPresetForm from '../SecondFilmPresetForm/SecondFilmPresetForm';

interface IFilmPresetFormProps {
    formsOptions: string[][];
}

interface IFilmPresetFormState {
    secondFilmPresetForm: string | null | React.ReactNode;
}

class FilmPresetForm extends Component <IFilmPresetFormProps, any> {
    public filmFormModel = {
        film: 'Adox CHM 125',
        type: '35mm',
        dev: '510-Pyro',
    };

    public state = {
        secondFilmPresetForm: null
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
            .then( data => {
                data === 'false'
                    ? this.setSecondFilmPresetForm( 'Selected film and developer can\'t use together' )
                    : this.setSecondFilmPresetForm( <SecondFilmPresetForm firstFormData ={this.filmFormModel} formsOptions = {data}/> )
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
                <button onClick={this.getSecondFilmFormOptions} type="button">Select</button>
                {/*Selected film and developer can't use together*/}
                {this.state.secondFilmPresetForm}
            </form>
        )
    }
}

export default FilmPresetForm;