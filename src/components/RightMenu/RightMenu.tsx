import React, { Component } from 'react';
import { Popups } from '../../shared/enums/popups';

class RightMenu extends Component<any, any> {
  public openPopup = (e: React.MouseEvent<HTMLButtonElement>) => {
    this.props.propsFn(e);
  };

  render() {
    return (
      <div className="rightpanel">
        <div className="panel">
          <button
            title="Volume mixer"
            id={Popups.VOLUME_MIXER}
            className="icon2"
            onClick={this.openPopup}
          >
            
          </button>
          <button
            title="Time/temp converter"
            id={Popups.TEMP_CONVERTER}
            className="icon2"
            onClick={this.openPopup}
          >
            
          </button>
          <button
            title="Push processing"
            id={Popups.PUSH_PROCESSING}
            className="icon2"
            onClick={this.openPopup}
          >
            
          </button>
        </div>
      </div>
    );
  }
}

export default RightMenu;
