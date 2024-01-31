import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <>
            <h1>vikas Psl !</h1>
        </>
    )
}

// const reactElement = {
//     type : 'a',
//     props : {
//         href : 'https://google.com',
//         target : '_blank',
//     },
//     children : 'Click me to visit'
// };
const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)

const reactElement = React.createElement(
    'a',
    {href : 'https://youtube.com',target : '_blank',},
    'Click to Visit Youtube ',
    anotherElement
)



ReactDOM.createRoot(document.querySelector('#pal')).render(
    reactElement
)





