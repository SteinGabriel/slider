/* eslint-disable react/prop-types */
import React from 'react';

const Track = (props) => {
  const { className, included, vertical, offset, length, style } = props;
let newLenght = length < 0 ?  0 : length
  
  const positonStyle = vertical ? {
      bottom: `${offset}%`,
      height: `${newLenght}%`,
    } : {
        left: `${offset}%`,
        width: `${newLenght}%`,
        };
    
    
    const elStyle = {
        ...style,
        ...positonStyle,
    };
    
    return included ? <div className={className} style={elStyle} /> : null;
};

export default Track;
