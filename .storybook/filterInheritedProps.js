const pdMap = require('./react-docs-for-storybook.json');

const filterInheritedProps = (component) => {
  const type = component;
  const propertiesDefinition = pdMap[`${type.name}Props`] ? pdMap[`${type.name}Props`].props : pdMap[type.name] ? pdMap[type.name].props : [];
  const propsToHide = propertiesDefinition.filter(property => property.inheritedFrom);

  let hiddenArgTypes = {};
  propsToHide.forEach(prop => hiddenArgTypes[prop.property] = { table: { disable: true }});

  return hiddenArgTypes;
}

export default filterInheritedProps;
