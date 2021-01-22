const pdMap = require('./react-docs-for-storybook.json');

const hideInheritedProps = (argTypes, component) => {
  const type = component;
  const propertiesDefinition = pdMap[`${type.name}Props`] ? pdMap[`${type.name}Props`].props : pdMap[type.name] ? pdMap[type.name].props : [];
  const propsToHide = propertiesDefinition.filter(property => property.inheritedFrom);

  propsToHide.forEach(prop => argTypes[prop.property] = { table: { disable: true }});

  return argTypes;
}

export default hideInheritedProps;
