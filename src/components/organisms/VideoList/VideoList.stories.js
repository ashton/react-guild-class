import React from "react";

import { storiesOf } from "@storybook/react";
import VideoList from './VideoList';

const videos = [
  { title: 'video 1', thumbnail: 'https://spaceplace.nasa.gov/review/share/youtube.en.png' },
  { title: 'video 2', thumbnail: 'https://placekitten.com/200/287' },
  { title: 'video 3', thumbnail: 'https://www.bauducco.com.br/wp/wordpress/wp-content/uploads/2017/09/default-placeholder-1-2.png' },
];

storiesOf("Organisms", module).add("VideoList", () => <VideoList videos={videos} />);
