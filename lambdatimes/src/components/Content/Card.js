import React from 'react';
import styled from 'styled-components'

let CardS = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
`
let Headline = styled.div`
  font-size: 25px;
  font-family: Didot, serif;
`
let Author = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
`
let AuthorImgC = styled.div`
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;
`
let AuthorImg = styled.img`
  width: 40px;
`
let AuthorSpan = styled.span`
  padding-left: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`

const Card = props => {
  // console.log(props.headline)
  return (
    <CardS>
      <Headline>{/* headline goes here */}
        {props.headline}
      </Headline>
      <Author>
        <AuthorImgC> {/* image source goes here */}
          <AuthorImg src={props.img} alt='author portrait'/>
        </AuthorImgC>
        <AuthorSpan>By {/* author goes here */}{props.author}</AuthorSpan>
      </Author>
    </CardS>
  );
};

// Make sure to include PropTypes.

export default Card;
