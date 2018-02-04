import React, { Component } from 'react';
import './App.css';
import ReportBuilder from "./containers/ReportBuilder/ReportBuilder";

class App extends Component {
    render() {
        return (
            <div className="container">
                <ReportBuilder />
            </div>
      );
    }
}

export default App;
