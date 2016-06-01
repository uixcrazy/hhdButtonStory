import React from 'react';
import { storiesOf } from '@kadira/storybook'; // , action
import HoverEffects01 from '../HoverEffects01';
//import $ from "jquery";

storiesOf('HoverEffects01', module)
  .add('hover 01', () => (
    <HoverEffects01 btnStyle="btn-1">
      <svg>
        <rect x="0" y="0" fill="none" width="100%" height="100%" />
      </svg>
      hover me!
    </HoverEffects01>
  ))
  .add('hover 02', () => (
    <HoverEffects01 btnStyle="btn-2">hover me!</HoverEffects01>
  ))
  .add('hover 03', () => (
    <HoverEffects01 btnStyle="btn-3">hover me!</HoverEffects01>
  ))
  .add('hover 04', () => (
    <HoverEffects01 btnStyle="btn-4">hover me!</HoverEffects01>
  ))
  .add('hover 05', () => (
    <HoverEffects01 btnStyle="btn-5">hover me!</HoverEffects01>
  ))
