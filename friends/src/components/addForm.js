import React, { Component } from 'react';

export default class App extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <form onSubmit={(e) => this.props.submit(e)}>
                    <label className="text-white">Name</label>
                    <br/>
                    <input type="text" required value={this.props.name} name="name" onChange={this.props.input} />
                    <br/>
                    <label className="text-white">Age</label>
                    <br/>
                    <input type="number" required value={this.props.age} name="age" onChange={this.props.input} />
                    <br/>
                    <label className="text-white">Email</label>
                    <br/>
                    <input type="email" required value={this.props.email} name="email" onChange={this.props.input} />
                    <br />
                    <button type="submit"> Submit </button>
            </form>
            </div>
        )
    }
}