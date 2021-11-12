import React, { Component } from 'react'

class Updatestate extends Component { //rce code snippet

    constructor(props) {  //rconst code snippet
        super(props)
    
        this.state = {
            count: 0
        }
    }
    
    increment(){
        //never modify the state value directly
        //this.state.count = this.state.count +1  //this will not update the UI, but will update the console
       
        // use setState method to update the state value
        // this.setState(stateobject,callback)
        // callback syntax    () => {write your callback code}
        // this.setState(
        // {         //setState is async in nature and have two parameter
        //     count: this.state.count +1
        // }
        // ,                      // first is state object, and second is call back function and it is arrow function
        // () => {console.log('Callback value is', this.state.count)}      // this is call back function
        // )

        this.setState(
            (prevState) => ({      //pass function as argument to setState
            count: prevState.count+1
        })
        
        )

        console.log(this.state.count)       //console.log is sync in nature, it is called before setState 
    }

    incrementFive(){        // react will group multiple setState call to single for performance
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
               <div> COUNT - {this.state.count}</div>
                {/* <button onClick={()=>this.increment()} >Increment</button> */}
                <button onClick={()=>this.incrementFive()} >Increment</button>
            </div>
        )
    }
}

export default Updatestate
