import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types'
import styled from 'styled-components'

let CardsContainer = styled.div` 
  display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;

  @media (min-width: 1200px) {

    width: 1200px;
  }
`

const Cards = props => {
  // console.log(props.cards)
  return (
    <CardsContainer>
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
          {props.cards.map(event => 
          <Card key={event.headline} 
          headline={event.headline}
          img={event.img}
          author={event.author}
          />
          )}
    </CardsContainer>
  )
}

// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  headline: PropTypes.string,
  img: PropTypes.string,
  author: PropTypes.string

}

export default Cards;