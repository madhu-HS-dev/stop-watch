// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isTimeRunning: false, elapsedSeconds: 0}

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  onResetTimer = () => {
    clearInterval(this.intervalId)
    this.setState({isTimeRunning: false, elapsedSeconds: 0})
  }

  onStopTimer = () => {
    clearInterval(this.intervalId)
    this.setState({isTimeRunning: false})
  }

  increasedTimer = () => {
    this.setState(prevState => ({
      elapsedSeconds: prevState.elapsedSeconds + 1,
    }))
  }

  onStartTimer = () => {
    this.intervalId = setInterval(this.increasedTimer, 1000)
    this.setState({isTimeRunning: true})
  }

  renderTimer = () => {
    const {elapsedSeconds} = this.state

    const minutes = Math.floor(elapsedSeconds / 60)
    const seconds = Math.floor(elapsedSeconds % 60)

    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    const {isTimeRunning} = this.state

    return (
      <div className="stop-watch-container">
        <h1 className="stop-watch-heading">Stopwatch</h1>
        <div className="timer-container">
          <div className="timer-image-heading-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="image"
            />
            <h1 className="timer-heading">Timer</h1>
          </div>
          <h1 className="timer-digits">{this.renderTimer()}</h1>
          <div className="button-container">
            <button
              type="button"
              className="start button"
              onClick={this.onStartTimer}
              disabled={isTimeRunning}
            >
              Start
            </button>
            <button
              type="button"
              className="stop button"
              onClick={this.onStopTimer}
            >
              Stop
            </button>
            <button
              type="button"
              className="reset button"
              onClick={this.onResetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
