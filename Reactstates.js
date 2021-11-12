import React, {Component} from 'react'

class Reactstates extends Component{
    constructor(){
        super()

        this.state = {
                        message: 'Welcome visitor',
                        age:'30'
        }
    }
    changeMessage(){
        this.setState(
            {
            message: 'Thank you for subscription',
            age: 35
        }
        , () => {console.log(this.state.message)}
        )
    }
render(){
    return(
        <div>
            <h1>Message form state: {this.state.message}, Name from props: {this.props.name}, Age from state: {this.state.age}</h1>
            <button onClick={() => this.changeMessage()}>Subscribe</button>
        </div>
    )
}
}
export default Reactstates