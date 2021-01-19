import React from 'react'; 
import {storiesOf} from '@storybook/react'; 
import {CourseCard,View,Carousel} from '../src'; 
storiesOf("Original Go1d/CourseCard", module) 
.add('Base', () => <CourseCard />) 
.add('Almost all the Props', () => <CourseCard
  typeIcon="Course"
  type="Course"
  duration={74}
  author="GO1"
  title="Test Title"
  price="123"
  currency="AUD"
  courseImage="https://res.cloudinary.com/go1/image/fetch/w_1024,h_300,c_thumb,g_auto/https://udemy-images.udemy.com/course/750x422/435262_c617.jpg" 
  itemList={[
    {
      title: "Test"
    }
  ]} 
  passive={false}
/>) 
.add('Carousel with lots of combinations of Cards', () => <View padding={3}>
  <Carousel slidesToShow={3} slideAnimationDuration={150}>
    <CourseCard>
      Hello World!
    </CourseCard>
    <CourseCard type="Course" typeIcon="Course">
      Hello World!
    </CourseCard>
    <CourseCard type="Course" title="This is a test title">
    </CourseCard>
    <CourseCard type="Course" title="This is a test title" itemList={[
      {
        title: "Test"
      }
    ]}>
      Hello World!
    </CourseCard>
    <CourseCard type="Course" title="This is a test titlett test this is a longer title for some reason" itemList={[
      {
        title: "Test"
      }
    ]}>
    </CourseCard>
    <CourseCard type="Course" duration={74} author="Go1" title="Test Title" courseImage="https://res.cloudinary.com/go1/image/fetch/w_1024,h_300,c_thumb,g_auto/https://udemy-images.udemy.com/course/750x422/435262_c617.jpg" itemList={[
      {
        title: "Test"
      }
    ]}>
    </CourseCard>
    <CourseCard
      type="Course"
      duration={156}
      passive={false}
      metaList={[
        { icon: "MapPin", text: "Lorem ipsum dolor sit amet" },
      ]}
    >
      Hello World!
    </CourseCard>
  </Carousel>
</View>) 
.add('Skeleton', () => <CourseCard 
  skeleton={true}
/>) 
