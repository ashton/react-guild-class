import React, { Fragment } from 'react';
import { Text, Image } from '../../atoms';

const VideoCard = ({ title, thumbnail }) => (
  <Fragment>
    <Text value={title} />
    <hr/>
    <Image src={thumbnail} />
  </Fragment>
);

export default VideoCard;
