import React from "react";

import { storiesOf } from "@storybook/react";
import { text, number } from '@storybook/addon-knobs';
import Image from './Image';

storiesOf("Atoms", module).add("Image", () =>
  <Image
    src={text('Source', 'https://designshack.net/wp-content/uploads/placehold.jpg')}
    height={number('Altura', 100)}
    width={number('Largura', 100)}
  />);
