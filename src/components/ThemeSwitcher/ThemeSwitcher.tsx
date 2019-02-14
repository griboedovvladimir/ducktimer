import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actons';
import { ILoginState } from '../Login/Login';

interface IThemeSwitcherProps {
    switchTheme: (theme: string) => {}
}

class ThemeSwitcher extends Component <IThemeSwitcherProps> {

    public switchHandle = ( event: React.ChangeEvent<HTMLInputElement> ): void => {
        this.props.switchTheme( event.target.checked ? 'b-n-r' : 'b-n-w'  );
    };

    public render(): React.ReactNode {
        return (
            <div id="mode">
                <input onChange={this.switchHandle} className="checkbox" id="checkbox1" type="checkbox"/>
                <label htmlFor="checkbox1" className="checkbox-label">
                    <span className="on"></span>
                    <span className="off"></span>
                </label>
            </div>
        )
    }
}

const mapStateToProps = ( state: ILoginState ) => state;
export default connect( mapStateToProps, {...actions} )(  ThemeSwitcher );
