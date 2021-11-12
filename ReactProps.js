import React from 'react'

function ReactProps(props){ //props is just a argument name which receives the property passed
                            // using App.js to component file.
    console.log(props)
    //props.name='Ankur' //prpops are immutable, we can not assign a new value to props
    return(
        <div>
            <h1>Hello user: {props.name} and the age is: {props.age}</h1>
            {props.children}
        </div>
    )
}
export default ReactProps