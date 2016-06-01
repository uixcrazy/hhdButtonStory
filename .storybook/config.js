import { configure } from '@kadira/storybook';
require("../scss/main.scss");

function loadStories() {
  require('../components/stories/effects01');
  require('../components/stories/effects02');
  // require as many as stories you need.
}
configure(loadStories, module);
