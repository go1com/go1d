import React from 'react';
import {storiesOf} from '@storybook/react';
import {ToggleSwitch,View} from '../src';
storiesOf("ToggleSwitch", module)
.add('Toggle with no props', () => <ToggleSwitch />)
.add('Toggle with default value props', () => <ToggleSwitch defaultValue={true} />)
.add('Toggle with a different size', () => <View flexDirection="row" alignItems="baseline">
    <ToggleSwitch defaultValue={true} size="sm" marginRight={2}/>
    <ToggleSwitch defaultValue={false} size="md" marginRight={2}/>
    <ToggleSwitch defaultValue={true} size="lg" marginRight={2}/>
</View>)
.add('Toggle with disabled props', () => <View flexDirection="row">
    <ToggleSwitch defaultValue={false} size="md" disabled={true} marginRight={2} />
    <ToggleSwitch defaultValue={true} size="md" disabled={true} marginRight={2} />
</View>)
.add('Toggle with a label props', () => <View flexDirection="column" alignItems="baseline" justifyContent="center">
    <ToggleSwitch defaultValue={true} size="sm" label="Toggle switch" marginRight={2} />
    <ToggleSwitch defaultValue={false} size="md" label="Toggle switch" marginRight={2} />
    <ToggleSwitch defaultValue={true} size="lg" label="Toggle switch" marginRight={2} />
</View>)
.add('Toggle with a label and description props', () => <><ToggleSwitch defaultValue={true} size="sm" label="Toggle switch" description="This is helper text" marginRight={2} />
<ToggleSwitch defaultValue={false} size="md" label="Toggle switch" description="This is helper text" marginRight={2} />
<ToggleSwitch defaultValue={true} size="lg" label="Toggle switch" description="This is helper text" marginRight={2} /></>)
.add('Toggle with a label, description, reverse props', () => <View width="300px">
<ToggleSwitch defaultValue={true} size="sm" label="Toggle switch" description="This is helper text" direction="row-reverse" marginRight={2} />
<ToggleSwitch defaultValue={false} size="md" label="Toggle switch" description="This is helper text" direction="row-reverse" marginRight={2} />
<ToggleSwitch defaultValue={true} size="lg" label="Toggle switch" description="This is helper text" direction="row-reverse" marginRight={2} />
</View>)
.add('Toggle with a label, inline props', () => <><ToggleSwitch defaultValue={true} size="sm" label="Toggle switch" inline={true} marginRight={2} />
<ToggleSwitch defaultValue={false} size="md" label="Toggle switch" inline={true} marginRight={2} />
<ToggleSwitch defaultValue={true} size="lg" label="Toggle switch" inline={true} marginRight={2} /></>)
.add('Toggle with all props', () => <><ToggleSwitch defaultValue={true} size="sm" label="Toggle switch" description="This is helper text" inline={true} direction="row-reverse" marginRight={2} />
<ToggleSwitch defaultValue={false} size="md" label="Toggle switch" description="This is helper text" inline={true} direction="row-reverse" marginRight={2} />
<ToggleSwitch defaultValue={true} size="lg" label="Toggle switch" description="This is helper text" inline={true} direction="row-reverse" marginRight={2} /></>)
