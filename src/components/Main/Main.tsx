import React, { Component } from 'react';
import TopMenu from '../TopMenu/TopMenu';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import RightMenu from '../RightMenu/RightMenu';

class Main extends Component {
    public date = new Date();
    public state: any = {
        clock: this.date.toLocaleTimeString('en-GB')
    };

    constructor( props: any ) {
        super( props );
        setInterval( () => {
            this.startClock()
        }, 1000 );
    }

    public onLogOut = () => {

    };

    public startClock() {
        let d = new Date();
        this.setState( {...this.state, clock: d.toLocaleTimeString( 'en-GB' )} )
    }

    render() {
        return (
            <>
                <ThemeSwitcher/>
                <div id="clock">
                    <span id="timeicon" className="icon2"> </span>
                    <div id="time">{this.state.clock}</div>
                </div>
                <button onClick={this.onLogOut} id="logout" className="icon"></button>
                <TopMenu/>
                <RightMenu/>
            </>
        )
    }
}

export default Main;
