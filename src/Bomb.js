// your Bomb code here!
import React, { Component } from 'react';
class Bomb extends Component
{
    // state = {secondsLeft : props.initialCount}
    
    constructor(props)
    {
        super()
        this.state = {secondsLeft : props.initialCount}
        // this.state = {secondsLeft : 120}
        console.log(this.state)
    }
    render()
    {
        return(
            <div>
                {/* {this.state.secondsLeft} seconds left before I go boom! */}
                {this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`}
            </div>
        )
    }
}

export default Bomb