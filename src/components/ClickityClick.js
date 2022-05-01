import React, { Component } from "react"

export default class ClickityClick extends Component {
    constructor() {
        super()
        this.state = {
            hasbeenCllicked: false,
            currentTheme: 'blue',
            addressInfo: {
                street: null,
                number: null,
                city: null,
                country: null
            }
        }
        console.log(this.state.addressInfo.city)
    }

    handleClick = () => {
        this.setState(previousState => {
            return {
                hasbeenCllicked: !previousState.hasbeenCllicked,
                addressInfo: {
                   ...this.state.addressInfo, 
                    city: "New York",
                    number: "917 478 9882",
                    country: "USA",
                    street: "2051 Grand coucoure"
                } 

            }
        })
    }

    render() {
        return (
            <div>
                <p>I have been clicked {this.state.hasbeenCllicked ? `ON, My personal INFO: ${this.state.addressInfo.number} - ${this.state.addressInfo.street}  - ${this.state.addressInfo.country} - ${this.state.addressInfo.number}` : 'OFF'}! </p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
}