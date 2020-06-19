import React, { Component } from 'react';
import TopMenu from '../TopMenu/TopMenu';
import ThemeSwitcher from '../ThemeSwitcher';
import RightMenu from '../RightMenu';
import Timer from '../Timer';
import { connect } from 'react-redux';
import * as actions from '../../redux/actons';
import { storageService } from '../../shared/services/storage.service';
import { IStoreInterface } from '../../interfaces/store.interface';
import { RouteComponentProps } from 'react-router';
import Popup from '../Popup/Popup';

class Main extends Component<IStoreInterface & RouteComponentProps> {
  public date = new Date();
  public state: any = {
    clock: this.date.toLocaleTimeString('en-GB'),
  };

  constructor(props: any) {
    super(props);
    if (
      !(
        storageService.getTokenFromLocalStorage() ||
        storageService.getTokenFromSessionStorage()
      )
    ) {
      this.props.history.push('/');
    }
    setInterval(() => {
      this.startClock();
    }, 1000);
  }

  public componentDidMount() {}

  public onLogOut = () => {
    storageService.removeTokenFromLocalStorage();
    storageService.removeTokenFromSessionStorage();
    this.props.authorize({ authorize: undefined });
    this.props.history.push('/');
  };

  public startClock() {
    let d = new Date();
    this.setState({ ...this.state, clock: d.toLocaleTimeString('en-GB') });
  }

  public initTimers() {
    return this.props.timer.timers.map(
      (timer: { time: string; id: string }): React.ReactNode => {
        return <Timer key={timer.id} id={timer.id} time={timer.time} />;
      }
    );
  }

  render() {
    return (
      <div className={this.props.currentTheme.theme}>
        {/*<div className="effect-background">*/}
        <ThemeSwitcher />
        <div className="row1">
          <div id="clock">
            <span id="timeicon" className="icon2">
              {' '}
              
            </span>
            <div id="time">{this.state.clock}</div>
          </div>
          <div className="logout">
            <button title="Log out" className="icon" onClick={this.onLogOut}>
              
            </button>
          </div>
        </div>
        <TopMenu />
        <div className="row2">
          <RightMenu />
          <div className="table">{this.initTimers()}</div>
        </div>
        {/*</div>*/}
        {/*<Popup/>*/}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => state;
export default connect(
  mapStateToProps,
  { ...actions }
)(Main);
