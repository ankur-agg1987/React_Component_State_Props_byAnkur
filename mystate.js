import React, { Component } from 'react'

class mystate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    
    updatevalue(){
        //this.state.count = this.state.count +1

        this.setState({             //is in async mode
            count:this.state.count +1
        })
        console.log(this.state.count)       //is in sync mode
    }

    render() {
        return (
            <div>
                <h1>Welcome to component state example: {this.state.count}</h1>
                <button onClick={()=>this.updatevalue()}>Click to update count value</button>
            </div>
        )
    }
}

export default mystate
