import React from 'react';

const Card = props => {
  // console.log(props.headline)
  return (
    <div className="card">
      <div className="headline">{/* headline goes here */}
        {props.headline}
      </div>
      <div className="author">
        <div className="img-container"> {/* image source goes here */}
          <img src={props.img} alt='author portrait'/>
        </div>
        <span>By {/* author goes here */}{props.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

export default Card;
