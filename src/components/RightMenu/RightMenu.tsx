import React, { Component } from 'react';

class RightMenu extends Component <{}> {
    render() {
        return (
            <div className="rightpanel">
            <div className="panel">
                <button title="Volume mixer" className="icon2"></button>
                <button title="Time/temp converter" className="icon2"></button>
                <button title="Push processing" className="icon2"></button>
            </div>
            </div>
    )
    }
}

export default RightMenu;