import React from 'react';

import { VideoCard } from '../../molecules';

const VideoList = ({ videos }) => (
  <ul>
    {videos.map((item) =>
      <li key={item.title}><VideoCard key={item.title} title={item.title} thumbnail={item.thumbnail} /></li>)
    }
  </ul>
);

export default VideoList;
