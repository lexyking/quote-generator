import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Main from './main'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quotes: []
        }
    }

    getQuote = () => {
        console.log('component mounted');
        fetch('https://joan-quote-se.glitch.me/quotes')
            .then(response => response.json())
            .then(data => this.setState({ quotes: data }));
    }

    componentDidMount() {

        this.getQuote();
    }
    render() {

        console.log(this.state.quotes);
        return (<React.Fragment>
            <Header />
            <Main quotes={this.state.quotes} />
            <Footer />
        </React.Fragment>
        )
    }
}

export default App