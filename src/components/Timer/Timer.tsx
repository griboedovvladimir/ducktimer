import React, { Component } from 'react';

class Timer extends Component <any, any> {
    public timerValue = {
        hours: '00',
        min: '00',
        sec: '00'
    };

    constructor( props: any ) {
        super( props );
        this.state = {currentTimerValue: '00:00:00', set: undefined}
    }

    private checkTimerValue( value: string ): boolean {
        let reg = /^[0-5][0-9]$/;
        return reg.test( value );
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
        this.setState( {...this.state, currentTimerValue: timerValue} )
    };
    public onStartTimer = (): void => {
        this.startTimer();
    };
    public onStopTimer = (): void => {
        cancelAnimationFrame( this.state.set );
    };

    private timerOverHandle(): void {
        // let audio = new Audio();
        // audio.src = '../../sounds/duck.mp3';
        // audio.autoplay = true;
        // timer.parentNode.parentNode.classList.add('finished')
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
        return (
            <div className="timers">
                <button className="delete">×</button>
                <h4>defult process</h4>
                <div className='timerpanel'>
                    <span>{this.state.currentTimerValue}</span> <p> Note: </p>
                    <button onClick={this.onStopTimer} className="icon2"></button>
                    <button onClick={this.onStartTimer} className="icon2"></button>
                    <button onClick={this.onSetTimer} className="icon2"></button>
                </div>
                <div className="settimerpanel">Select process<select>
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
                        <input onChange={this.onChangeTimerValue} type="text" name="hours" size={1} defaultValue="00"/>:
                        <input onChange={this.onChangeTimerValue} type="text" name="min" size={1} defaultValue="00"/>:
                        <input onChange={this.onChangeTimerValue} type="text" name="sec" size={1} defaultValue="00"/>
                    </div>
                    <textarea className="timerinputs" placeholder="Note" id="notesinput' + this.name + '"/>
                    <div>
                        <button data-tooltip="Load film preset time" className="filmbutton"></button>
                    </div>
                </div>
                <button className="storkUp" id="stork' + this.name + '">▼</button>
            </div>
        )
    }
}

export default Timer;