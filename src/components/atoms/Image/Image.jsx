import React from 'react';

const Image = ({ src, height = 100,  width = 100 }) => (
  <img src={src} height={height} width={width} />
);


export default Image;
