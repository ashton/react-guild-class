import React from "react";

import { storiesOf } from "@storybook/react";
import { text } from '@storybook/addon-knobs';
import SearchBox from './SearchBox';

storiesOf("Molecules", module).add("SearchBox", () => <SearchBox />);
