import React, {Component} from 'react'

class Field extends Component {

    constructor(props){
        super(props)
        this.state = {value: props.initialValue}
        this.handleEvent = this.handleEvent.bind(this)
    }

    handleEvent(event){
        this.setState({value: event.target.value})
    }

    render() {
        return (
                <div>
                    <label>{this.state.value}</label><br/>
                    <input onChange={this.handleEvent} value={this.state.value}/>
                </div>
        )
    }
}

export default Field