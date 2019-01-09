import React from "react";

import { storiesOf } from "@storybook/react";
import { text } from '@storybook/addon-knobs';
import InputText from './InputText';

storiesOf("Atoms", module).add("Input Text", () => <InputText value={text('Value')} />);
