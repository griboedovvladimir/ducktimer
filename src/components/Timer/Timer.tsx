import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actons';
import FilmPresetForm from '../FilmPresetForm';
import { API_CONSTANTS } from '../../CONSTANTS';
import { restService } from '../../shared/services/rest.service';
import { OTHER_CONSTANTS } from '../../CONSTANTS';


class Timer extends Component <any, any> {
    public timerValue = {
        hours: '00',
        min: '00',
        sec: '00'
    };

    public timerParams = {
        selectProcess: 'film developer',
        otherProcess: '',
        note: ''

    };

    private timerIsStopped: boolean = false;

    constructor( props: any ) {
        super( props );
        this.state = {
            currentTimerValue: OTHER_CONSTANTS.START_TIME,
            set: undefined,
            panelIsOpen: false,
            timerFinished: false,
            formIsActivated: null,
            selectProcess: '',
            otherProcess: '',
            note: ''
        };
    }

    private checkTimerValue( value: string ): boolean {
        let reg = /^[0-5][0-9]$/;
        return reg.test( value );
    }

    public componentDidUpdate( nextProps: any ): void {
        if ( this.props.time !== OTHER_CONSTANTS.START_TIME && nextProps.time !== this.props.time ) {
            this.setState( {...this.state, currentTimerValue: this.props.time, timerFinished: false} );
            this.props.setTime( {time: OTHER_CONSTANTS.START_TIME, id: this.props.id} );
        }
    }

    public componentWillUnmount() {
        cancelAnimationFrame( this.state.set );
    }

    public onChangeTimerValue = ( event: React.ChangeEvent<HTMLInputElement> ): void => {
        if ( this.checkTimerValue( event.target.value ) ) {
            switch ( event.target.name ) {
                case 'hours':
                    this.timerValue.hours = event.target.value;
                    break;
                case 'min':
                    this.timerValue.min = event.target.value;
                    break;
                case 'sec':
                    this.timerValue.sec = event.target.value;
                    break;
            }
        }
    };

    public onChangeTimerParams = ( event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> ): void => {
        switch ( event.target.name ) {
            case 'process':
                this.timerParams.otherProcess = event.target.value;
                break;
            case 'note':
                this.timerParams.note = event.target.value;
                break;
        }
    };

    public onSelectProcess = ( event: React.ChangeEvent<HTMLSelectElement> ): void => {
        switch ( event.target.name ) {
            case 'selectProcess':
                this.timerParams.selectProcess = event.target.value;
                break;
        }
    };

    public onSetTimer = (): void => {
        const timerValue = `${this.timerValue.hours}:${this.timerValue.min}:${this.timerValue.sec}`;
        this.setState( {...this.state, currentTimerValue: timerValue, timerFinished: false, ...this.timerParams} );
    };

    public onStartTimer = (): void => {
        this.startTimer();
        this.timerIsStopped = false;
    };

    public onStopTimer = (): void => {
        cancelAnimationFrame( this.state.set );
        if ( this.timerIsStopped ) {
            this.setState( {...this.state, currentTimerValue: OTHER_CONSTANTS.START_TIME} );
        }
        this.timerIsStopped = !this.timerIsStopped;
    };

    public onRemoveTimer = (): void => {
        this.props.removeTimer( this.props.id );
    };

    public onTogglePanel = (): void => {
        this.setState( {...this.state, panelIsOpen: ( !this.state.panelIsOpen ), formIsActivated: false} );
    };

    public getFilmOptions = (): void => {
        if ( !this.state.formIsActivated ) {
            this.filmFormActivate( 'Loading...' );
            restService.post( API_CONSTANTS.FILM_FORM_FIRST_STEP, '' ).then( response => response.json() )
                .then( options => {
                    this.filmFormActivate( <FilmPresetForm id={this.props.id} formsOptions={options}/> );
                } ).catch( () => {
                this.filmFormActivate( null );
                console.log( 'Bad connection' );
            } )
        } else {
            this.filmFormActivate( null )
        }
    };

    private filmFormActivate( value: string | React.ReactNode | null ) {
        this.setState( {...this.state, formIsActivated: value} );
    }

    private timerOverHandle(): void {
        let audio = new Audio();
        audio.src = './static/media/duck.mp3';
        audio.autoplay = true;
        this.setState( {...this.state, timerFinished: true} )
    }

    private startTimer(): void {
        let time = this.state.currentTimerValue;
        let arr = time.split( ':' );
        let hour = arr[ 0 ], min = arr[ 1 ], sec = arr[ 2 ];
        let settime = parseInt( hour ) * 3600 + parseInt( min ) * 60 + parseInt( sec );
        let countdown = new Date(),
            responseTime = new Date( Date.now() + ( 1000 * settime ) );

        let goTimer = () => {
            if ( this.state.currentTimerValue !== OTHER_CONSTANTS.START_TIME ) {
                countdown.setTime( Number( responseTime ) - Date.now() );
                let h = countdown.getUTCHours().toString(),
                    m = countdown.getUTCMinutes().toString(),
                    s = countdown.getUTCSeconds().toString();
                if ( +h < 10 ) h = '0' + h;
                if ( +m < 10 ) m = '0' + m;
                if ( +s < 10 ) s = '0' + s;
                if ( +m === 0 && +s === 0 ) {
                    s = '00';
                    this.timerOverHandle();
                }
                this.setState( {...this.state, currentTimerValue: h + ':' + m + ':' + s} );
                if ( countdown.getUTCHours() > 0 || countdown.getUTCMinutes() > 0 || countdown.getUTCSeconds() > 0 )
                    this.setState( {...this.state, set: requestAnimationFrame( goTimer )} );
            }
        };
        this.setState( {...this.state, set: requestAnimationFrame( goTimer )} );
    }

    render() {
        let timersClassList = this.state.timerFinished ? 'timers finished' : 'timers';
        let process = ( this.state.otherProcess ? this.state.otherProcess : this.state.selectProcess ) || 'default value';

        return (
            <div className={timersClassList}>
                <button onClick={this.onRemoveTimer} className="delete">×</button>
                <h4>{process}</h4>
                <div className='timer-panel'>
                    <span>{this.state.currentTimerValue || OTHER_CONSTANTS.START_TIME}</span>
                    <p> Note: {this.state.note}</p>
                    <button onClick={this.onStopTimer} title="pause" className="icon2"></button>
                    <button onClick={this.onStartTimer} title="start" className="icon2"></button>
                    <button onClick={this.onSetTimer} title="set" className="icon2"></button>
                </div>
                {this.state.panelIsOpen && <div className="set-timer-panel" defaultValue=" ">Select process
                    <select onChange={this.onSelectProcess} name="selectProcess">
                        <option>film developer</option>
                        <option>developer</option>
                        <option>fix bath</option>
                        <option>stop bath</option>
                        <option>washing</option>
                        <option>drying</option>
                        <option>stabilised</option>
                        <option>exposure</option>
                    </select>
                    <br/>Other process<input onChange={this.onChangeTimerParams} type="text" name="process" size={4}
                                             defaultValue={this.state.otherProcess}/>
                    <div>
                        <input onChange={this.onChangeTimerValue} type="text" name="hours" size={1}
                               defaultValue={this.timerValue.hours}/>:
                        <input onChange={this.onChangeTimerValue} type="text" name="min" size={1}
                               defaultValue={this.timerValue.min}/>:
                        <input onChange={this.onChangeTimerValue} type="text" name="sec" size={1}
                               defaultValue={this.timerValue.sec}/>
                    </div>
                    <textarea onChange={this.onChangeTimerParams} name="note" className="timer-inputs"
                              placeholder="Note"/>
                    <div>
                        <button onClick={this.getFilmOptions} title="Load film preset time" className="film-button">
                        </button>
                    </div>
                    {this.state.formIsActivated}
                </div>}
                <button onClick={this.onTogglePanel} className="stork">
                    {this.state.panelIsOpen ? '▲' : '▼'}
                </button>
            </div>
        )
    }
}

const mapStateToProps = ( state: any, ownProps: any ) => ( {...state, ...ownProps} );
export default connect( mapStateToProps, {...actions} )( Timer );