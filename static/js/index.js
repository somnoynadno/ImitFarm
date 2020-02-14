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
            <div className="container-md">
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
            <div className="container mt-2">
                <div className="row align-items-center justify-content-md-center">
                    <Title />
                    <Speed />
                    <Money />
                </div>
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
        this.speed = 1;
    }

    render() {
        return (
            <div className="col-4 text-center">
                  <h4>Speed:</h4>
                  <div className="btn-group" role="group">
                    <button type="button" className="btn btn-secondary">&laquo;</button>
                    <button type="button" className="btn btn-secondary">{this.speed + 'x'}</button>
                    <button type="button" className="btn btn-secondary">&raquo;</button>
                  </div>
              </div>
        )
    }
}

class Money extends React.Component {
    constructor(props) {
        super(props);
        this.money = 100;
    }

    render() {
        return (
            <div className="col-4 text-center">
                <h2> Money: {this.money} </h2>
            </div>
        )
    }
}

ReactDOM.render(
    <Menu />,
    document.getElementById('menu-container')
);

ReactDOM.render(
    <Farm />,
    document.getElementById('farm-container')
);