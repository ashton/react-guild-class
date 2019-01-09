import React from "react";

import { storiesOf } from "@storybook/react";
import { text } from '@storybook/addon-knobs';
import Button from './Button';

storiesOf("Atoms", module).add("Button", () => <Button text={text('Label', 'Salvar')} />);
