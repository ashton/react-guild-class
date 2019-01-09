import { configure, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs/react";

const req = require.context("../src", true, /\.stories\.js$/);

const loadStories = () => req.keys().forEach(filename => req(filename));

addDecorator(withKnobs);

configure(loadStories, module);
