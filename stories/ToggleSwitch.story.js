import React from 'react';
import {storiesOf} from '@storybook/react';
import {ToggleSwitch,View} from '../src';
storiesOf("ToggleSwitch", module)
.add('Toggle with no props', () => <ToggleSwitch />)
.add('Toggle with default props', () => <ToggleSwitch defaultValue={true} />)
.add('Toggle with a different size', () => <View flexDirection="row" alignItems="baseline">
    <ToggleSwitch defaultValue={true} size="sm" marginRight={2}/>
    <ToggleSwitch defaultValue={false} size="md" marginRight={2}/>
    <ToggleSwitch defaultValue={true} size="lg" marginRight={2}/>
</View>)
.add('Toggle with disabled props', () => <View flexDirection="row">
    <ToggleSwitch defaultValue={false} size="md" marginRight={2} disabled={true} />
    <ToggleSwitch defaultValue={true} size="md" marginRight={2} disabled={true} />
</View>)
.add('Toggle with a label props', () => <View flexDirection="column" alignItems="baseline" justifyContent="center">
<ToggleSwitch defaultValue={true} size="sm" marginRight={2} label="Toggle switch" />
<ToggleSwitch defaultValue={false} size="md" marginRight={2} label="Toggle switch" />
<ToggleSwitch defaultValue={true} size="lg" marginRight={2} label="Toggle switch" />
</View>)
.add('Toggle with a label and helper text props', () => <View flexDirection="column" alignItems="baseline" justifyContent="center">
<ToggleSwitch defaultValue={true} size="sm" marginRight={2} label="Toggle switch" helperText="This is helper text" />
<ToggleSwitch defaultValue={false} size="md" marginRight={2} label="Toggle switch" helperText="This is helper text" />
<ToggleSwitch defaultValue={true} size="lg" marginRight={2} label="Toggle switch" helperText="This is helper text" />
</View>)
.add('Toggle with a label, helper text, reverse props', () => <View flexDirection="column" alignItems="baseline" justifyContent="center" width={300}>
<ToggleSwitch defaultValue={true} size="sm" marginRight={2} label="Toggle switch" reverse={true} />
<ToggleSwitch defaultValue={false} size="md" marginRight={2} label="Toggle switch" reverse={true} />
<ToggleSwitch defaultValue={true} size="lg" marginRight={2} label="Toggle switch" reverse={true} />
</View>)
