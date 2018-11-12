import * as React from 'react';
import { connect } from 'react-redux';
import { simpleAction } from './actions/SimpleAction';
import './App.css';
import logo from './logo.svg';
 
interface AppProps {
  simpleAction?: any
}

class App extends React.Component<AppProps, any> {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>

        <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
        <button onClick={this.simpleAction}>Test redux action</button>

      </div>
    );
  }

  private simpleAction = (event:any) => {
    this.props.simpleAction();
  }
}

const mapDispatchToProps = (dispatch:any) => ({
  simpleAction: () => dispatch(simpleAction())
});

const mapStateToProps = (state:any) => ({
  state
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
