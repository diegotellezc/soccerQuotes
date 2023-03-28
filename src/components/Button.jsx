import React from 'react'
import "./styles/Button.css"

const Button = ({CreateNewQuote}) => {
    return (
        <button className='button' onClick={CreateNewQuote}>Siguiente</button>
    )
}

export default Button
