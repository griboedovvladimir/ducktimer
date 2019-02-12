import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actons';

class Timer extends Component <any, any> {
    public timerValue = {
        hours: '00',
        min: '00',
        sec: '00'
    };

    constructor( props: any ) {
        super( props );
        this.state = {
            currentTimerValue: '00:00:00',
            set: undefined,
            panelIsOpen: false,
            timerFinished: false,
        }
    }

    private checkTimerValue( value: string ): boolean {
        let reg = /^[0-5][0-9]$/;
        return reg.test( value );
    }

    public componentDidMount() {
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

    public onSetTimer = (): void => {
        const timerValue = `${this.timerValue.hours}:${this.timerValue.min}:${this.timerValue.sec}`;
        this.setState( {...this.state, currentTimerValue: timerValue, timerFinished: false} );
    };

    public onStartTimer = (): void => {
        this.startTimer();
    };

    public onStopTimer = (): void => {
        cancelAnimationFrame( this.state.set );
    };

    public onRemoveTimer = (): void => {
        this.props.removeTimer( this.props.id );
    };

    public onTogglePanel = (): void => {
        this.setState( {...this.state, panelIsOpen: ( !this.state.panelIsOpen )} );

    };

    public getFilmOptions = (): void => {

    };

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
        let settime = parseInt( hour ) * 3600 + parseInt( min ) * 60 + parseInt( sec ) + 1;
        let countdown = new Date(),
            responseTime = new Date( Date.now() + ( 1000 * settime ) );

        let goTimer = () => {
            if ( this.state.currentTimerValue !== '00:00:00' ) {
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
        return (
            <div className={timersClassList}>
                <button onClick={this.onRemoveTimer} className="delete">×</button>
                <h4>defult process</h4>
                <div className='timerpanel'>
                    <span>{this.state.currentTimerValue || '00:00:00'}</span> <p> Note: </p>
                    <button onClick={this.onStopTimer} title="pause" className="icon2"></button>
                    <button onClick={this.onStartTimer} title="start" className="icon2"></button>
                    <button onClick={this.onSetTimer} title="set" className="icon2"></button>
                </div>
                {this.state.panelIsOpen && <div className="settimerpanel">Select process<select>
                    <option>film developer</option>
                    <option>developer</option>
                    <option>fix bath</option>
                    <option>stop bath</option>
                    <option>washing</option>
                    <option>drying</option>
                    <option>stabilised</option>
                    <option>exposure</option>
                </select>
                    <br/>Other process<input type="text" name="process" size={4} defaultValue=""/>
                    <div>
                        <input onChange={this.onChangeTimerValue} type="text" name="hours" size={1}
                               defaultValue={this.timerValue.hours}/>:
                        <input onChange={this.onChangeTimerValue} type="text" name="min" size={1}
                               defaultValue={this.timerValue.min}/>:
                        <input onChange={this.onChangeTimerValue} type="text" name="sec" size={1}
                               defaultValue={this.timerValue.sec}/>
                    </div>
                    <textarea className="timerinputs" placeholder="Note"/>
                    <div>
                        <button onClick={this.getFilmOptions} title="Load film preset time" className="filmbutton">
                        </button>
                    </div>

                    <form>
                        <p>Select film, film type and developer</p>
                        <select id="film-select" name="film-select">
                            <option>select</option>
                        </select>
                        <select id="film-type-select" name="film-type-select">
                            <option>35mm</option>
                            <option>120</option>
                            <option>sheet</option>
                        </select>
                        <select id="dev-select" name="dev-select">
                            <option>select</option>
                        </select>
                        <button type="button">Select</button>
                        {/*Selected film and developer can't use together*/}
                        <div>
                            <div>Select parameters
                                <p>
                                    <span>ISO/ASA</span>npm
                                    <span>dilution</span>
                                    <span>temperature</span>
                                </p>
                            </div>
                            <select name="iso" id="iso"/>
                            <select name="dilution" id="dilution"/>
                            <select name="temp" id="temp"/>
                            <button type="button">To set form</button>
                            {/*Time not found, select other parameters*/}
                        </div>
                    </form>

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