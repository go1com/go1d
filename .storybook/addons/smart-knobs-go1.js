// credits go to https://github.com/storybooks/addon-smart-knobs

import { cloneElement } from 'react'
import { action } from '@storybook/addon-actions'
import { text, boolean, object, select } from '@storybook/addon-knobs/react'
const pdMap = require('../react-docs-for-storybook.json');


const withDefaultOption = (options) => ({ '': '--', ...options })
const createSelect = (propName, elements, defaultProps) => {
  try {
    let options = elements;
    if (options.constructor === Array) {
      options = ['--',...elements]
    } else {
      options = withDefaultOption(options)
    }
    return select(propName, options, defaultProps)
  }
  catch (e) { }
}


const ensureType = (item) => item.flowType ? ({ ...item, type: item.flowType }) : item
export const withSmartKnobs = (story, context) => {
  let component = story(context);

  let target = component.props.components && component.props.propTables && component.props.propTablesExclude
    ? component.props.children
    : component

  const defaultProps = {
    ...(target.type.defaultProps || {}),
    ...target.props
  }

  const defaultPropsKeys = Object.keys(defaultProps);

  const displayName = component.type.displayName;
  const props = pdMap[`${displayName}Props`] ? pdMap[`${displayName}Props`].props : pdMap[displayName] ? pdMap[displayName].props : [];
  const finalProps = props ? Object.keys(props).reduce((acc, n) => {
    const item = ensureType(props[n]);

    // skipp all props which are not defined in example, TODO: add additional props into another tab and hide them from the story code display
    if (!defaultPropsKeys.includes(item.property)) return acc;

    const translatedItem = {
      name: item.property,
      defaultValue: item.defaultValue,
      type:{name: item.propType},
      inheritedFrom: item.inheritedFrom,
      required: item.required,
    };

    if (!translatedItem.type) {
      const defaultValue = translatedItem.defaultValue ? translatedItem.defaultValue.value : 'Unkwnow'
      console.warn(`There is a prop with defaultValue ${defaultValue} but it wasn't specified on element.propTypes. Check story: "${context.kind}".`)
      return acc
    }

    return {
      ...acc,
      [item.property]: translatedItem,
    }
  }, {}) : {}


 // const newProps = resolvePropValues(finalProps, defaultProps)
  const propNames = Object.keys(finalProps);
  //GO1D Customization
  const newProps = propNames.reduce((sum, propName) => ({
    ...sum,
    [propName]: resolveGo1dPropTypes(propName, finalProps[propName], defaultProps[propName]),
  }), {});

  if (component.props.components) {
    return cloneElement(component, { ...component.props, children: cloneElement(component.props.children, newProps) })
  }

  return cloneElement(component, newProps)
}

const resolveGo1dPropTypes = (name, propInfo, defaultValue) => {
  const type = propInfo.type.name;

  if(name === "size") {
    return createSelect('Size',{'Small':'sm','Medium':'md','Large':'lg'}, defaultValue);
  }
  if(name.toLowerCase().indexOf('color') !== -1) {
    return createSelect(name,['accent', 'background', 'contrast', 'danger', 'default', 'faded', 'faint', 'highlight', 'muted', 'note', 'soft', 'subtle', 'success', 'warning'], defaultValue);
  }
  if(name === "fontWeight") {
    return createSelect('fontWeight',['light', 'normal', 'semibold', 'bold'], defaultValue);
  }
  if(name === "css") {
    return object('css', defaultValue);
  }

  if (type === "string") {
    return text(name, defaultValue)
  }
  if (type === "boolean") {
    return boolean(name, defaultValue ? true : false)
  }
  if (type === "(evt: SyntheticEvent) => void" || name.indexOf('on') === 0) {
    return action(name);
  }

  if (typeof defaultValue === 'object') {
    return object(name, defaultValue);
  }

  return text(name, defaultValue)
}
