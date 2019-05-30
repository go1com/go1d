import React from 'react';
import { storiesOf } from '@storybook/react';
import { Option } from '../src';
storiesOf("Option", module)
  .add('Base', () => <Option title="Title test" />)
  .add('Add actionIcon', () => <Option title="Title test" actionIcon="ChevronRight" />)
  .add('Add spotIcon', () => <Option title="Sector Specific" spotIcon="SectorSpecific" />)
  .add('With meta', () => <Option title="Title test"
    meta="Meta level test 1, Meta level test 2, Meta level test 3, Meta level test 4, Meta level test 5" />)
  .add('With meta + spotIcon + actionIcon', () => <Option title="Title test"
    spotIcon="SafetyAndCompliance"
    actionIcon="ChevronRight"
    meta="Meta level test 1, Meta level test 2, Meta level test 3, Meta level test 4, Meta level test 5" />)
  .add('With checked and spotIcon', () => <Option title="Title test"
    spotIcon="SafetyAndCompliance"
    checked={true}
    meta="Meta level test 1, Meta level test 2, Meta level test 3, Meta level test 4, Meta level test 5" />)
  .add('With checked and disabled', () => <Option title="Title test"
    checked={true}
    disabled={true} />)
  .add('Force height ', () => <Option title="Title test"
    spotIcon="SafetyAndCompliance"
    actionIcon="ChevronRight"
    lines={1} />) 