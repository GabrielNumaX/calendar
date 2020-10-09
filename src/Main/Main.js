import React, { Component } from 'react';
import Calendar from 'react-calendar';

import { format } from 'date-fns';

import isSameDay from 'date-fns/isSameDay'

import '../Sass/Main.scss';
import '../Sass/Calendar.scss';

import Modal from './Modal';
 
class Main extends Component {
    state = {
        date: new Date(),
        sessions: [],
        timeToShow: '',
        sessionsToShow: [],
        showModal: false,
    }

    componentDidMount() {

        //this simulates API call

        this.day1 = new Date(2020, 9, 22, 15, 30);
        this.day2 = new Date(2020, 9, 23, 17, 30);
        this.day3 = new Date(2020, 9, 24, 18, 30);
        this.day4 = new Date(2020, 9, 26, 11, 30);

        this.obj1 = {
            date: this.day1,
            title: 'Coach Minnie',
            duration: '30 min',
            fee: 'FREE',
        }

        this.obj2 = {
            date: this.day1,
            title: 'Booty Burn Challenge',
            duration: '30 min',
            fee: 'FREE',
        }

        this.obj3 = {
            date: this.day1,
            title: 'Morning Flow Sun Salute',
            duration: '30 min',
            fee: 'FREE',
        }

        this.obj4 = {
            date: this.day1,
            title: 'Afternoon Yoga',
            duration: '30 min',
            fee: 'FREE',
        }

        this.obj5 = {
            date: this.day2,
            title: 'Coach Day 2',
            duration: '30 min',
            fee: 'FREE',
        }

        this.obj6 = {
            date: this.day2,
            title: 'Day 2 Burn Challenge',
            duration: '30 min',
            fee: 'FREE',
        }

        this.obj7 = {
            date: this.day2,
            title: 'Day 2 Morning Flow',
            duration: '30 min',
            fee: 'FREE',
        }

        this.obj8 = {
            date: this.day2,
            title: 'Day 2 Yoga',
            duration: '30 min',
            fee: 'FREE',
        }

        this.obj9 = {
            date: this.day3,
            title: 'Day 3 Coach',
            duration: '30 min',
            fee: 'FREE',
        }

        this.obj10 = {
            date: this.day3,
            title: 'Day 3 Challenge',
            duration: '30 min',
            fee: 'FREE',
        }

        this.obj11 = {
            date: this.day3,
            title: 'Day 3 Sun Salute',
            duration: '30 min',
            fee: 'FREE',
        }

        this.obj12 = {
            date: this.day3,
            title: 'Day 3 Yoga',
            duration: '30 min',
            fee: 'FREE',
        }

        this.obj13 = {
            date: this.day4,
            title: 'Day 4 Minnie',
            duration: '30 min',
            fee: 'FREE',
        }

        this.obj14 = {
            date: this.day4,
            title: 'Day 4 Challenge',
            duration: '30 min',
            fee: 'FREE',
        }

        this.obj15 = {
            date: this.day4,
            title: 'Day 4 Sun Salute',
            duration: '30 min',
            fee: 'FREE',
        }

        this.obj16 = {
            date: this.day4,
            title: 'Day 4 Yoga',
            duration: '30 min',
            fee: 'FREE',
        }

        this.arr = [this.obj1, this.obj2, this.obj3, this.obj4, this.obj5, this.obj6,
                    this.obj7, this.obj8, this.obj9, this.obj10, this.obj11, this.obj12,
                    this.obj13, this.obj14, this.obj15, this.obj16];

        this.setState({sessions: [...this.arr]});

        //API call simulation end

        this.timeToShow();

        this.interval = setInterval(this.timeToShow.bind(this), 50000);  
        
        this.tileClassName = ({date, view}) => {

            if(view === 'month'){
    
                const datesAddClass = this.state.sessions.map((item) => {
    
                    return item.date;
                })
    
                // console.log(datesAddClass);

                if (datesAddClass.find(dDate => isSameDay(dDate, date))) {

                    return 'SelectedTile';
                }
            }
        }
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
 
    onChange = (date) => {

        this.setState({ date })

        let arr = []
    
        this.state.sessions.map(item => {

            if(isSameDay(date, item.date)){

                arr.push(item);
            }

            return arr;
        })

        this.setState({
            sessionsToShow: [...arr]
        })
    }

    sessionsToShow = () => {

        if(Array.isArray(this.state.sessionsToShow) && this.state.sessionsToShow.length){

            const sessions = this.state.sessionsToShow.map((item, pos) => {

                return(
                    <div className="SessionCard" key={pos} onClick={() => this.setState({showModal:true})}>
                        <div className="TimeAndDuration">

                            <h4>
                                {format(item.date, 'p')}
                            </h4>

                            <h5>{item.duration}</h5>
                        </div>

                        <div className="Description">

                            <h4>{item.title}</h4>
                            
                            <h5>{item.fee}</h5>

                        </div>
                    </div>
                )
            })

            return sessions;
        }
        else {
            return null;
        }
    }
 
    render() {

        console.log(this.state.showModal);

        return (
            <div className="Main">

                <div className="Left">

                    <div className="Yoga">Life Yoga</div>

                    <h2>Ashtanga Yoga Live Session</h2>

                    <div className="Session">
                        <h3>{format(this.state.date, 'EEEE MMM yy')}</h3>

                        {this.sessionsToShow()}

                    </div>

                </div>

                <div className="Right">
                    <h2>Select a Date &amp; Time</h2>

                    <Calendar
                        onChange={this.onChange}
                        value={this.state.date}
                        // selectRange={true}
                        showNeighboringMonth={false}
                        // tileDisabled={({activeStartDate, date, view }) => date.getDay() === 0}
                        tileClassName={this.tileClassName}
                    />

                <p>{this.state.timeToShow}</p>

                </div>

                {this.state.showModal ? <Modal close={() => this.setState({showModal: false})}/> : null}

            </div>
        );
    }
}

export default Main;