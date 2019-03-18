import React from 'react'; 
import {storiesOf} from '@storybook/react'; 
import {OverviewHero,View,Icon,Link,Text,Avatar,OverviewCtaCard} from '../src'; 
storiesOf("OverviewHero", module) 
.add('Overview hero with required props only (title)', () => <OverviewHero title="Interaction Design" />) 
.add('Overview hero with background, breadcrumb and subtitle', () => <OverviewHero
  title="Interaction Design"
  backgroundImage="https://images.unsplash.com/photo-1539580709660-0505d36fa6e7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=df3e6c039eb1e5e32fef492bf6e3376e&auto=format&fit=crop&w=1001&q=80"
  subtitle={
    <View flexDirection="row" alignItems="center">
      <Icon name="Video" marginRight={3} />
      VIDEO
    </View>}
  breadcrumb={
    <Link to="/back">
      Back
    </Link>}
>
  <Text>This course will provide you with the skills and knowledge to design, build, test and launch digital products that are intuitive, user-friendly and accessible.</Text>
</OverviewHero>) 
.add('Overview hero with all props', () => <OverviewHero
  title="Interaction Design"
  backgroundImage="https://images.unsplash.com/photo-1539512110726-6d89c892f117?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=10cd46d36ba78d30891de50e25907fe6&auto=format&fit=crop&w=2089&q=80"
  subtitle={
    <View flexDirection="row" alignItems="center">
      <Icon name="Course" marginRight={3} />
      COURSE
    </View>}
  breadcrumb={
    <Link to="/back">Back</Link>}
  author={
    <View flexDirection="row" alignItems="center">
      <Avatar
        size={4}
        src="https://i.imgur.com/Ee55uvc.jpg"
        fullName="Leslie Knope"
        marginRight={3}
      />
      Leslie Knope
    </View>}
  contentWidth="wide"
  duration={1360}
  ctaCard={
    <OverviewCtaCard
      backgroundImage="https://images.unsplash.com/photo-1539512110726-6d89c892f117?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=10cd46d36ba78d30891de50e25907fe6&auto=format&fit=crop&w=2089&q=80"
      buttonLabel="Import"
      onButtonClick
      width="280px"
      marginLeft={3}
    />
  }
>
  <Text>This course will provide you with the skills and knowledge to design, build, test and launch digital products that are intuitive, user-friendly and accessible.</Text>
</OverviewHero>) 
