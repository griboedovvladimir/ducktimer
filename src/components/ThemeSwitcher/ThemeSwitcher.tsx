import React, { Component } from 'react';

class ThemeSwitcher extends Component{
    render(){
        return (
            <div id="mode">
                <input className="checkbox" id="checkbox1" type="checkbox"/>
                <label htmlFor="checkbox1" className="checkbox-label">
                    <span className="on"></span>
                    <span className="off"></span>
                </label>
            </div>
        )
    }
}

export  default ThemeSwitcher