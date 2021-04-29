import React, { Component } from 'react'
import SecondCounter from './SecondsCounter'
import PropTypes from 'prop-types'
import '../App.css'

let offset = null, interval = null
export default class Timer extends Component {
    static get propTypes() {
        return {
            options: PropTypes.object
        }
    }

    constructor(props) {
        super(props)
        this.onUpdate = props.onUpdate
        this.state = { clock: 0, time: '' }
        this.time = new Date()
    }

    componentDidMount() {
        this.play()

    }

    componentWillUnmount() {
        this.pause()
    }

    pause() {
        if (interval) {
            clearInterval(interval)
            interval = null
        }
    }

    play() {
        if (!interval) {
            offset = Date.now()
            interval = setInterval(this.update.bind(this), this.props.options.delay)
        }
    }

    clickDifference() {
        let difference = new Date()
        difference = difference - this.time
        this.time = new Date()
        return difference
    }

    reset() {
        let clockReset = 0
        this.setState({ clock: clockReset })
        let time = SecondCounter(clockReset / 1000)
        this.setState({ time: time })
    }
// Updates the clock as the game goes on
    update() {
        let clock = this.state.clock
        clock += this.calculateOffset()
        this.setState({ clock: clock })
        let time = SecondCounter(clock / 1000)
        this.setState({ time: time })
        this.onUpdate({ clock })
    }

    calculateOffset() {
        let now = Date.now()
        let newOffset = now - offset
        offset = now
        return newOffset
    }

    render() {


        return (
            <div>
                <div className="timer_lable">
                <label style={{width: "100%"}} >Timer:</label>
                </div>
                 
                 <h4 style={{ width: "100%" }} >{this.state.time} {this.props.prefix}</h4>

            </div>
        )
    }
}
