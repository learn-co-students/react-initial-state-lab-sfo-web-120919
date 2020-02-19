import React from 'react'
import { prependOnceListener } from 'cluster'

export default class Bomb extends React.Component {
    constructor(props){
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    isTimerZero(secondsLeft){
        if (secondsLeft > 0) {
             return <div>{this.state.secondsLeft} seconds left before I go boom!</div>
        } else {
             return <div>Boom!</div>
        }
    }
    render(){
        return this.isTimerZero(this.state.secondsLeft)
    }
}