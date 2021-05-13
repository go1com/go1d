---
title: Course Card
status: ready
releaseVersion: 0.2.15
---

## Examples

### Base
```.jsx
<CourseCard />
```

### Almost all the Props (with Price)
```.jsx
<CourseCard
  typeIcon="Course"
  type="Course"
  duration={74}
  author="Go1"
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
  status={{ type: "inProgress", text: "In progress" }}
  imageOverlayRenderer={() => <View flexGrow={1} alignItems="center" justifyContent="center"><ButtonFilled>Preview</ButtonFilled></View>}
  actionRenderer={() => <View marginTop={3}><ButtonFilled color="accent">Try for free</ButtonFilled></View>}
/>
```

### Almost all the Props (with Price and Premium)
```.jsx
<CourseCard
  typeIcon="Course"
  type="Course"
  duration={74}
  author="Go1"
  title="Test Title"
  price="123"
  currency="AUD"
  premium={true}
  courseImage="https://res.cloudinary.com/go1/image/fetch/w_1024,h_300,c_thumb,g_auto/https://udemy-images.udemy.com/course/750x422/435262_c617.jpg"
  itemList={[
    {
      title: "Test"
    }
  ]}
  passive={false}
/>
```

### Almost all the Props (with Premium)
```.jsx
<CourseCard
  typeIcon="Course"
  type="Course"
  duration={74}
  author="Go1"
  title="Test Title"
  premium={true}
  courseImage="https://res.cloudinary.com/go1/image/fetch/w_1024,h_300,c_thumb,g_auto/https://udemy-images.udemy.com/course/750x422/435262_c617.jpg"
  itemList={[
    {
      title: "Test"
    }
  ]}
  passive={false}
/>
```

### Almost all the Props (with Status)
```.jsx
<CourseCard
  typeIcon="Course"
  type="Course"
  duration={74}
  author="Go1"
  title="Test Title"
  courseImage="https://res.cloudinary.com/go1/image/fetch/w_1024,h_300,c_thumb,g_auto/https://udemy-images.udemy.com/course/750x422/435262_c617.jpg"
  itemList={[
    {
      title: "Test"
    }
  ]}
  status={
		{
			type: "inProgress",
			text: "In progress",
		}
	}
  passive={false}
/>
```

### Carousel with lots of combinations of Cards
```.jsx
<View padding={3}>
  <Carousel slidesToShow={3} slideAnimationDuration={150}>
    <CourseCard>
      Hello World!
    </CourseCard>
    <CourseCard type="Course" typeIcon="Course">
      Hello World!
    </CourseCard>
    <CourseCard type="Course" title="This is a test title" status={{ type: "enrolled", text: "Enrolled" }}>
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
</View>
```

### Skeleton
```.jsx
<CourseCard
  skeleton={true}
/>
```


```!jsx
<ComponentDoc component="CourseCard" />
```
