import React from 'react'; 
import {storiesOf} from '@storybook/react'; 
import {SearchInput} from '../src'; 
storiesOf("Original Go1d/SearchInput", module) 
.add('Basic SearchInput', () => <SearchInput 
    id="blank" 
    placeholder="Search for courses, videos, interactive lessons, and more..." 
    onSubmit={() => {}} 
/>) 
.add('SearchInput Sizes', () => <React.Fragment>
    <SearchInput 
        id="blank" 
        placeholder="Search for courses, videos, interactive lessons, and more..."
        size="sm" 
        value="Small"  
        onSubmit={() => {}} 
    />
    <br />
    <SearchInput 
        id="blank" 
        placeholder="Search for courses, videos, interactive lessons, and more..."
        size="md" 
        value="Medium"  
        onSubmit={() => {}} 
    />
    <br />
    <SearchInput 
        id="blank" 
        placeholder="Search for courses, videos, interactive lessons, and more..."
        size="lg" 
        value="Large"  
        onSubmit={() => {}} 
    />
</React.Fragment>) 
.add('SearchInput not clearable', () => <SearchInput 
    id="blank" 
    placeholder="Search for courses, videos, interactive lessons, and more..."
    size="md" 
    value="Medium"  
    onSubmit={() => {}} 
    clearable={false}
/>) 
.add('SearchInput with behaviour on clear and on submit', () => <SearchInput 
    id="blank" 
    value="Hold me Thrill me Submit me Clear me"
    placeholder="Search for courses, videos, interactive lessons, and more..." 
    onClear={() => {alert("Back in blank!")}}
    onSubmit={(value) => {alert(`Value: ${value}`)}}
/>) 
