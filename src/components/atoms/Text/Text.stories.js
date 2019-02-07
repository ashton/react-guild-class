import React from "react";

import { storiesOf } from "@storybook/react";
import { text } from '@storybook/addon-knobs';
import Text from './Text';

storiesOf("Atoms", module).add("Text", () => <Text value={text('Value', 'Texto bolado')} />);
