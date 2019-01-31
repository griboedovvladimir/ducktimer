import React, { Component } from 'react';

class RightMenu extends Component {
    render() {
        return (
            <div id="rightpanel">
                <button id="volumeMixer" className="rightpanel icon2"></button>
                <button id="tempConverter" className="rightpanel icon2"></button>
                <button id="PushProcessing" className="rightpanel icon2"></button>
            </div>
    )
    }
}

export default RightMenu;