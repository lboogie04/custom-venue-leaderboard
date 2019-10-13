import React, { Component } from 'react'

class CountDown extends Component {
    constructor(props) {
        super(props)
        this.count = this.count.bind(this)
        this.state = {
            days: 0,
            minutes: 0,
            hours: 0,
            secounds: 0,
            time_up:"",
            display: null
        }
        this.x = null
        this.deadline = null
    }
    count () {        
        var now = new Date().getTime();
        var t = this.deadline - now;
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((t % (1000 * 60)) / 1000);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        this.setState({days, minutes, hours, seconds})
        if (t < 0) {
                clearInterval(this.x);
                this.setState({ days: 0, minutes: 0, hours: 0, seconds: 0, time_up: "", display: false })
            }
    }
    componentDidMount() {
        this.deadline = new Date("Oct 13, 2019 21:00:00").getTime();
 
        this.x = setInterval(this.count, 1000);
    }
    
    render() {
        const { days, seconds, hours, minutes, time_up, display } = this.state
        const {suffix} = this.props
        if (display == false) return null
        return ( 
            <div> 
              <p className="time">{hours}:{minutes}:{seconds}</p>
              <p className="suffix">{suffix}</p>
            </div>
        )
    }
}

export default CountDown