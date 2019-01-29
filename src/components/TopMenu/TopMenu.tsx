import React, { Component } from 'react';

class TopMenu extends Component {
    render() {
        return (
            <div id="controlpanel">
                <button id="addTimer" className="controlpanel icon2"></button>
                <button id="loadTable" className="controlpanel icon2"></button>
                <button id="saveTable" className="controlpanel icon3"></button>
                <button id="clearTable" className="controlpanel icon2"></button>
            </div>
        )
    }
}

export default TopMenu;