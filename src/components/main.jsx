import React, { Component } from 'react';
// import Submit from './submit'
// import Quotes from './json'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: '',
            author: ''
        }
    }


    generateQuote = () => {
        console.log('component mounted');
        fetch('https://joan-quote-se.glitch.me/quotes/underscore')
            .then(response => response.json())
            .then(data => this.setState({ quotes: data.quote, author: data.author }));
    }

    componentDidMount() {

        this.generateQuote();
    }

    render() {

        return (
            <main className="container">
                <section className="mainSection">
                    <section className="exit">
                        <div className="quote">
                            <p className="content">{this.state.quotes}</p>
                            <p className="author">{this.state.author}</p>
                        </div>
                    </section>
                    <section className="submit">
                        <button onClick={this.generateQuote}
                            className="submitBtn">Submit</button>
                    </section>

                </section>
            </main>
        )
    }
}

export default Main
