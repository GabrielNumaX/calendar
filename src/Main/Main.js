import React, { Component } from 'react';
import Calendar from 'react-calendar';

import '../Sass/Main.scss';

// import 'react-calendar/dist/Calendar.css';
import '../Sass/Calendar.scss';
 
class Main extends Component {
    state = {
        date: new Date(),
        sessions: [],
        timeToShow: '',
    }

    componentDidMount() {

        //this simulates API call

        this.day1 = new Date(2020, 10, 22, 15, 30);
        this.day2 = new Date(2020, 10, 23, 17);
        this.day3 = new Date(2020, 10, 24, 18, 30);
        this.day4 = new Date(2020, 10, 26, 11);

        this.obj1 = {
            date: this.day1,
            title: 'Coach Minnie',
            duration: '30 min',
            fee: 'FREE',
        }

        this.obj2 = {
            date: this.day2,
            title: 'Booty Burn Challenge',
            duration: '30 min',
            fee: 'FREE',
        }

        this.obj3 = {
            date: this.day3,
            title: 'Morning Flow Sun Salute',
            duration: '30 min',
            fee: 'FREE',
        }

        this.obj4 = {
            date: this.day4,
            title: 'Afternoon Yoga',
            duration: '30 min',
            fee: 'FREE',
        }

        this.arr = [this.obj1, this.obj2, this.obj3, this.obj4];

        this.setState({sessions: [...this.arr]});

        this.timeToShow();

        this.interval = setInterval(this.timeToShow.bind(this), 50000);        
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

   

    timeToShow = () => {

        let time = new Date();

        let hours = time.getHours();

        let minutes = time.getMinutes();

        let amPm = '';

        if(hours < 12) {

            amPm = 'am';
        }
        else {
            amPm = 'pm';
        }

        time = time.toString();

        time = time.split(' ');

        let country = time[6].split('(');

        this.setState({timeToShow: `${country[1]} (${hours}:${minutes}${amPm})`});
    }

 
    onChange = (date) => this.setState({ date })
 
    render() {

        console.log('render')

        console.log(this.state.sessions);   
        return (
            <div className="Main">

                <div className="Left">

                    <div className="Yoga">Life Yoga</div>

                    <h2>Ashtanga Yoga Live Session</h2>

                    <div className="Session">
                        <h3>Dia parseado</h3>

                        <div className="SessionCard">
                            <div className="TimeAndDuration">

                                <h4>
                                    18:30
                                </h4>

                                <h5>30 min</h5>
                            </div>

                            <div className="Description">

                                <h4>TITLLE HERE</h4>
                                
                                <h5>Free</h5>

                            </div>
                        </div>

                        <div className="SessionCard">
                            <div className="TimeAndDuration">

                                <h4>
                                    18:30
                                </h4>

                                <h5>30 min</h5>
                            </div>

                            <div className="Description">

                                <h4>TITLLE HERE</h4>
                                
                                <h5>Free</h5>

                            </div>
                        </div>

                        <div className="SessionCard">
                            <div className="TimeAndDuration">

                                <h4>
                                    18:30
                                </h4>

                                <h5>30 min</h5>
                            </div>

                            <div className="Description">

                                <h4>TITLLE HERE</h4>
                                
                                <h5>Free</h5>

                            </div>
                        </div>

                        <div className="SessionCard">
                            <div className="TimeAndDuration">

                                <h4>
                                    18:30
                                </h4>

                                <h5>30 min</h5>
                            </div>

                            <div className="Description">

                                <h4>TITLLE HERE</h4>
                                
                                <h5>Free</h5>

                            </div>
                        </div>


                    </div>

                </div>

                <div className="Right">
                    <h2>Select a Date &amp; Time</h2>

                    <Calendar
                        onChange={this.onChange}
                        value={this.state.date}
                    />

                <p>{this.state.timeToShow}</p>

                </div>

            </div>
        );
    }
}

export default Main;