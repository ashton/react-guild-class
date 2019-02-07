import React from "react";

import { storiesOf } from "@storybook/react";
import { text, number } from '@storybook/addon-knobs';
import VideoCard from './VideoCard';

storiesOf("Molecules", module).add("VideoCard", () =>
  <VideoCard
    title={text('Titulo', 'Video bolado')}
    thumbnail={text('Thumb', 'https://designshack.net/wp-content/uploads/placehold.jpg')}
  />);
