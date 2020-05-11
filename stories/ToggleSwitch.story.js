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
.add('Toggle with a label and description props', () => <><ToggleSwitch defaultValue={true} size="sm" marginRight={2} label="Toggle switch" description="This is helper text" />
<ToggleSwitch defaultValue={false} size="md" marginRight={2} label="Toggle switch" description="This is helper text" />
<ToggleSwitch defaultValue={true} size="lg" marginRight={2} label="Toggle switch" description="This is helper text" /></>)
.add('Toggle with a label, description, reverse props', () => <View width="300px">
<ToggleSwitch defaultValue={true} size="sm" marginRight={2} label="Toggle switch" description="This is helper text" reverse={true} alignText="right" />
<ToggleSwitch defaultValue={false} size="md" marginRight={2} label="Toggle switch" description="This is helper text" reverse={true} alignText="right" />
<ToggleSwitch defaultValue={true} size="lg" marginRight={2} label="Toggle switch" description="This is helper text" reverse={true} alignText="right" />
</View>)
.add('Toggle with a label, inline props', () => <><ToggleSwitch defaultValue={true} size="sm" marginRight={2} label="Toggle switch" inline={true} />
<ToggleSwitch defaultValue={false} size="md" marginRight={2} label="Toggle switch" inline={true} />
<ToggleSwitch defaultValue={true} size="lg" marginRight={2} label="Toggle switch" inline={true} /></>)
