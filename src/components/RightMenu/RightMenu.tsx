import React, { Component } from 'react';

class RightMenu extends Component<{}> {
  public openPopup = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.id)
  }

  render() {
    return (
      <div className="rightpanel">
        <div className="panel">
          <button title="Volume mixer" id="widgetMixer" className="icon2" onClick={this.openPopup}>
            
          </button>
          <button title="Time/temp converter" id="tempConverter" className="icon2"  onClick={this.openPopup}>
            
          </button>
          <button title="Push processing" id="pushProcessing" className="icon2" onClick={this.openPopup}>
            
          </button>
        </div>
      </div>
    );
  }
}

export default RightMenu;
