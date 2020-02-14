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
    render() {
        return (
            <div className="row align-items-center justify-content-md-center">
                <Title />
                <Speed />
                <Money />
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
        this.state = {speed : 1};
    }

    render() {
        return (
            <div className="col-4 text-center">
                  <h4>Speed:</h4>
                  <div className="btn-group" role="group">
                    <button type="button" className="btn btn-secondary">&laquo;</button>
                    <button type="button" className="btn btn-secondary">{this.state.speed + 'x'}</button>
                    <button type="button" className="btn btn-secondary">&raquo;</button>
                  </div>
              </div>
        )
    }
}

class Money extends React.Component {
    constructor(props) {
        super(props);
        this.state = {money : 100};
    }

    render() {
        return (
            <div className="col-4 text-center">
                <h2> Money: {this.state.money} </h2>
            </div>
        )
    }
}

class CurrentTime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {time : 0};
    }

    tick() {
        this.setState(state => ({
            time: state.time + 1
        }));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }    

    render() {
        return (
            <div className="row mt-2">
                <div className="col">
                    <h2 className="float-right"> Current time: {this.state.time + 's'} </h2>
                </div>
            </div>
        )
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="container-md">
                <Menu />
                <Farm />
                <CurrentTime />
            </div>
        )
    }
}


ReactDOM.render(
    <Game />,
    document.getElementById('container')
);
