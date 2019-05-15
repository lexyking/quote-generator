import React, { Component } from 'react'
import logo from './logo.png'


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date().toDateString(),
            time: new Date().toLocaleTimeString(),
            display: this.getDate()
        }
    }

    getDate = () => setInterval(() => {
        this.setState({
            date: new Date().toDateString(),
            time: new Date().toLocaleTimeString()
        })

    }, 1000)

    render() {


        return (
            <div className="header">
                <div className="logo"><img src={logo} alt="logo"></img>
                </div>
                <h3 className="title">Random quotes Generator</h3>
                <div className="date"><span className="currentDate">{this.state.date}</span>
                    <span className="currentTime">{this.state.time}</span></div>
            </div>
        )
    }
}

export default Header
