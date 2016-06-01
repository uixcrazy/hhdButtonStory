import React from 'react';
import { storiesOf } from '@kadira/storybook'; // , action
import HoverEffects02 from '../HoverEffects02';

storiesOf('HoverEffects02', module)
  .add('learn more', () => (
    <HoverEffects02 btnStyle="btn-01">
      Learn More
    </HoverEffects02>
  ))
