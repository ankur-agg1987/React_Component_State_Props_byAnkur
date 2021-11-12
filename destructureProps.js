import React from 'react'

function Destructureprops(props) {
    const {a,b,c} = props
    console.log(props)
    console.log(a)
    console.log(b)
    console.log(c)
    return (
        <div>
            <h1>First value:{a}, Second value:{b}, Third value:{c}</h1>
        </div>
    )
}

export default Destructureprops
