import React from 'react'; 
import {storiesOf} from '@storybook/react'; 
import {Carousel,View, Text} from '../src'; 
storiesOf("Original Go1d/Carousel", module) 
.add('Base', () => <Carousel>
  <View css={{
    height: 200,
    minWidth: 150,
    maxWidth: '100%',
    width: 425,
    backgroundColor: "#7732bb",
  }} />
  <View css={{
    height: 200,
    minWidth: 150,
    maxWidth: '100%',
    width: 425,
    backgroundColor: "#047cc0",
  }} />
  <View css={{
    height: 200,
    minWidth: 150,
    maxWidth: '100%',
    width: 425,
    backgroundColor: "#e3bc13",
  }} />
  <View css={{
    height: 200,
    minWidth: 150,
    maxWidth: '100%',
    width: 425,
    backgroundColor: "#db7c00",
  }} />
</Carousel>) 
.add('Full Width ones', () => <Carousel width={800}>
  <View css={{
    height: 200,
    minWidth: 150,
    maxWidth: '100%',
    width: 900,
    backgroundColor: "#7732bb",
  }} />
  <View css={{
    height: 200,
    minWidth: 150,
    maxWidth: '100%',
    width: 900,
    backgroundColor: "#047cc0",
  }} />
  <View css={{
    height: 200,
    minWidth: 150,
    maxWidth: '100%',
    width: 900,
    backgroundColor: "#e3bc13",
  }} />
  <View css={{
    height: 200,
    minWidth: 150,
    maxWidth: '100%',
    width: 900,
    backgroundColor: "#db7c00",
  }} />
</Carousel>) 
.add('More Props', () => <Carousel clickScrollAmount={2} breakpoints={{
  "sm": {
    slidesToShow: 1.3,
  },
  "md": {
    slidesToShow: 2.75,
  },
  "lg": {
    slidesToShow: 4,
  }
}}>
  <View css={{
    height: 200,
    minWidth: 150,
    maxWidth: '100%',
    width: 425,
    backgroundColor: "#7732bb",
  }} />
  <View css={{
    height: 200,
    minWidth: 150,
    maxWidth: '100%',
    width: 425,
    backgroundColor: "#047cc0",
  }} />
  <View css={{
    height: 200,
    minWidth: 150,
    maxWidth: '100%',
    width: 425,
    backgroundColor: "#e3bc13",
  }} />
  <View css={{
    height: 200,
    minWidth: 150,
    maxWidth: '100%',
    width: 425,
    backgroundColor: "#db7c00",
  }} />
</Carousel>) 
.add('Shorter Duration', () => <Carousel slideAnimationDuration={50}>
  <View css={{
    height: 200,
    minWidth: 150,
    maxWidth: '100%',
    width: 425,
    backgroundColor: "#7732bb",
  }} />
  <View css={{
    height: 200,
    minWidth: 150,
    maxWidth: '100%',
    width: 425,
    backgroundColor: "#047cc0",
  }} />
  <View css={{
    height: 200,
    minWidth: 150,
    maxWidth: '100%',
    width: 425,
    backgroundColor: "#e3bc13",
  }} />
  <View css={{
    height: 200,
    minWidth: 150,
    maxWidth: '100%',
    width: 425,
    backgroundColor: "#db7c00",
  }} />
</Carousel>) 
.add('With title', () => {
  return (
    <Carousel title={<Text fontSize={4} fontWeight='semibold' lineHeight='paragraph'>Title</Text>}>
      <View css={{
        height: 200,
        minWidth: 150,
        maxWidth: '100%',
        width: 425,
        backgroundColor: "#7732bb",
      }} />
      <View css={{
        height: 200,
        minWidth: 150,
        maxWidth: '100%',
        width: 425,
        backgroundColor: "#047cc0",
      }} />
      <View css={{
        height: 200,
        minWidth: 150,
        maxWidth: '100%',
        width: 425,
        backgroundColor: "#e3bc13",
      }} />
      <View css={{
        height: 200,
        minWidth: 150,
        maxWidth: '100%',
        width: 425,
        backgroundColor: "#db7c00",
      }} />
      <View css={{
        height: 200,
        minWidth: 150,
        maxWidth: '100%',
        width: 425,
        backgroundColor: "#7732bb",
      }} />
      <View css={{
        height: 200,
        minWidth: 150,
        maxWidth: '100%',
        width: 425,
        backgroundColor: "#047cc0",
      }} />
      <View css={{
        height: 200,
        minWidth: 150,
        maxWidth: '100%',
        width: 425,
        backgroundColor: "#e3bc13",
      }} />
      <View css={{
        height: 200,
        minWidth: 150,
        maxWidth: '100%',
        width: 425,
        backgroundColor: "#db7c00",
      }} />
    </Carousel>
  )
})
