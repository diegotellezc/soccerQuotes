import React from 'react'
import Button from './Button'
import "./styles/ContainerInfo.css"

const ContainerInfo = ({ quote, player, CreateNewQuote }) => {

    return (
        <section className='containerInfo'>
            <h1 className='containerInfo__title'>Frases Graciosas en el Fútbol</h1>

            <article className='containerInfo__quote'>
                <img className='player' src={`/images/futbolista${player}.webp`} alt="player img" />
                <p>{quote.quote}</p>
            </article>

            <article className='containerInfo__author'>
                <h4>Autor: {quote.author}</h4>
            </article>

            

            <Button CreateNewQuote={CreateNewQuote}/>

        </section>
    )
}

export default ContainerInfo
