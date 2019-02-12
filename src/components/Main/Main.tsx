import React, { Component } from 'react';
import TopMenu from '../TopMenu/TopMenu';
import ThemeSwitcher from '../ThemeSwitcher';
import RightMenu from '../RightMenu';
import Timer from '../Timer';
import { connect } from 'react-redux';
import * as actions from '../../redux/actons';
import { storageService } from '../../shared/services/storage.service';

class Main extends Component <any> {
    public date = new Date();
    public state: any = {
        clock: this.date.toLocaleTimeString( 'en-GB' )
    };

    constructor( props: any ) {
        super( props );
        if ( !( storageService.getTokenFromLocalStorage() || storageService.getTokenFromSessionStoragng() ) ) {
            this.props.history.push( '/' );
        }
        setInterval( () => {
            this.startClock()
        }, 1000 );
    }

    public componentDidMount() {
    }

    public onLogOut = () => {
        storageService.removeTokenFromLocalStorage();
        storageService.removeTokenFromSessionStoragng();
        this.props.authorize( {authorize: undefined} );
        this.props.history.push( '/' );
    };

    public startClock() {
        let d = new Date();
        this.setState( {...this.state, clock: d.toLocaleTimeString( 'en-GB' )} )
    }

    render() {
        return (
            <>
                <ThemeSwitcher/>
                <div className="row1">
                    <div id="clock">
                        <span id="timeicon" className="icon2"> </span>
                        <div id="time">{this.state.clock}</div>
                    </div>
                    <div className="logout">
                        <button className="icon" onClick={this.onLogOut}></button>
                    </div>
                </div>
                <TopMenu/>
                <RightMenu/>
                <Timer/>
            </>
        )
    }
}

const mapStateToProps = ( state: any ) => state;
export default connect( mapStateToProps, {...actions} )( Main );

