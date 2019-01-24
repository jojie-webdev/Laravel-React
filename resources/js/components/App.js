import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Example from './Example';

export default class App extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        const title = this.props.title;
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">{title}</div>

                            <Example body="I'm an example component!"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('comp')) {
    ReactDOM.render(<App title="Laravel + React"/>, document.getElementById('comp'));
}
