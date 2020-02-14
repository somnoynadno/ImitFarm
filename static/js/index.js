'use strict';

class Field extends React.Component {
    render() {
        return (
            <div className="col field"></div>
        )
    }
}

class Row extends React.Component {
    render() {
        return (
            <div className="row">
                <Field />
                <Field />
                <Field />
                <Field />
            </div>
        )
    }
}

class Farm extends React.Component {
    render() {
        return (
            <div className="mt-2">
                <Row />
                <Row />
                <Row />
                <Row />
            </div>
        )
    }
}

class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row align-items-center justify-content-md-center">
                <Title />
                <Speed speed={this.props.speed} incrementSpeed={this.props.incrementSpeed} />
                <Money money={this.props.money} />
            </div>
        )
    }
}


class Title extends React.Component {
    render() {
        return (
            <div className="col-4">
                <h1>My Farm</h1>
            </div>
        )
    }
}

class Speed extends React.Component {
    constructor(props) {
        super(props);
    }

    speedUp(e) {
        console.log('Speed up');
        if (this.props.speed < 10) {
            this.props.incrementSpeed(1);
        }
    }

    speedDown(e) {
        console.log('Speed down');
        if (this.props.speed > 1) {
            this.props.incrementSpeed(-1);
        }
    }

    render() {
        return (
            <div className="col-4 text-center">
                <h4>Speed:</h4>
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-secondary" onClick={this.speedDown.bind(this)}>&laquo;</button>
                    <button type="button" className="btn btn-secondary">{this.props.speed + 'x'}</button>
                    <button type="button" className="btn btn-secondary" onClick={this.speedUp.bind(this)}>&raquo;</button>
                </div>
            </div>
        )
    }
}

class Money extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-4 text-center">
                <h2> Money: {this.props.money} </h2>
            </div>
        )
    }
}

class CurrentTime extends React.Component {
    constructor(props) {
        super(props);
    }

    tick() {
        this.props.incrementTime(1);
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000 / this.props.speed);
    }
    
    componentDidUpdate() {
        // возможно, это костыль
        // зато это работает
        clearInterval(this.interval);
        this.interval = setInterval(() => this.tick(), 1000 / this.props.speed);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }   

    render() {
        return (
            <div className="row mt-2">
                <div className="col">
                    <h2 className="float-right"> Current time: {this.props.time + 's'} </h2>
                </div>
            </div>
        )
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {time : 0, money: 100, speed: 1};
    }

    incrementTime(amount) {
        this.setState({
            time: this.state.time + amount
        });
    }

    incrementSpeed(amount) {
        this.setState({
            speed: this.state.speed + amount
        });
    }

    incrementMoney(amount) {
        this.setState({
            money: this.state.money + amount
        });
    }

    render() {
        return (
            <div className="container-md">
                <Menu money={this.state.money} speed={this.state.speed} incrementSpeed={this.incrementSpeed.bind(this)}/>
                <Farm />
                <CurrentTime time={this.state.time} speed={this.state.speed} incrementTime={this.incrementTime.bind(this)} />
            </div>
        )
    }
}


ReactDOM.render(
    <Game />,
    document.getElementById('container')
);
