import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actons';
import PushProcessing from './popups/PushProcessing';
import VolumeMixer from './popups/VolumeMixer';
import { Popups } from '../../shared/enums/popups';
import Converter from './popups/Converter';

class Popup extends Component<any, any> {
    closePopUp = ( e: any ) => {
        this.props.popClose( e );
    }

    getPopUpContent(): any {
        switch ( this.props.popupType ) {
            case Popups.PUSH_PROCESSING:
                return <PushProcessing/>;
            case Popups.TEMP_CONVERTER:
                return <Converter/>;
            case Popups.VOLUME_MIXER:
                return <VolumeMixer/>;
        }
    }

    render() {
        return (
            <div className="popup-container" id="popupContainer">
                {<div className="popup">
                    <button id="closePopUp" className="popup__close" onClick={this.props.popClose}>×</button>
                    {this.getPopUpContent()}
                </div>}
            </div>
        );
    }
}

const mapStateToProps = ( state: any, props: any ) => ( {...state, ...props} );
export default connect(
    mapStateToProps,
    {...actions}
)( Popup );
