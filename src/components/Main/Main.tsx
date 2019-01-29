import React, { Component } from 'react';
import TopMenu from '../TopMenu/TopMenu';

class Main extends Component {
    render() {
        return (
            <>
                <button id="logout" className="icon"></button>
                <TopMenu/>
            </>
        )
    }
}

export default Main;
