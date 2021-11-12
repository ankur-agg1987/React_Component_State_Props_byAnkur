import React, {Component} from 'react';

class MyClassComponent extends Component{
    render(){
        return (
        <div>
        <h1>Hello this is Class component, Name:{this.props.name} & age:{this.props.age}</h1>
        </div>);
    }
}
export default MyClassComponent