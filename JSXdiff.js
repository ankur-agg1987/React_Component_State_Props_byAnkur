import React from 'react'

// diffrence between JS style and JSX style

function JSXdiff (){
    // return(
    //     <div>
    //         <h1>
    //             Hello this is a code to understand difference between JS style and JSX style
    //         </h1>
    //     </div>
    // )
// So in the above return statement we have not used the React import library
//in JSX code the React library is used by default when the html element are to be rendered

// JS style
return(
    // the create Element first is tag, second is property, third is string to print
    //React.createElement('div',null,'<h1>Hello</h1>')

    //React.createElement('div',null,'h1','Hello again')

    React.createElement('div',{id:'mydiv'},React.createElement('h1',{id:'myh1tag'},'Hello JS style code'))
)

}

export default JSXdiff