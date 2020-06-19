import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actons';
import { ILoginState } from '../Login/Login';
import { storageService } from '../../shared/services/storage.service';

interface IThemeSwitcherProps {
  switchTheme: (theme: string) => {};
}

class ThemeSwitcher extends Component<IThemeSwitcherProps, any> {
  public state = {
    switcher: false,
  };

  constructor(props: IThemeSwitcherProps) {
    super(props);
  }

  public switchHandle = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const theme: string = event.target.checked ? 'b-n-r' : 'b-n-w';
    this.props.switchTheme(theme);
    storageService.setThemeToSessionStorage(theme);
    this.setState({ ...this.state, switcher: event.target.checked });
  };

  public componentDidMount(): void {
    this.props.switchTheme(
      storageService.getThemeFromLocalStorage() || 'b-n-w'
    );
    this.setState({
      ...this.state,
      switcher: !(storageService.getThemeFromLocalStorage() === 'b-n-w'),
    });
  }

  public render(): React.ReactNode {
    return (
      <div id="mode">
        <input
          onChange={this.switchHandle}
          className="checkbox"
          id="checkbox1"
          checked={this.state.switcher}
          type="checkbox"
        />
        <label htmlFor="checkbox1" className="checkbox-label">
          <span className="on"></span>
          <span className="off"></span>
        </label>
      </div>
    );
  }
}

const mapStateToProps = (state: ILoginState) => state;
export default connect(
  mapStateToProps,
  { ...actions }
)(ThemeSwitcher);
