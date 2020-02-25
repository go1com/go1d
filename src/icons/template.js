const reactDomTemplate = (code, config, state) => {
  const name = state.componentName.replace('Svg', '')
  const result = `import * as React from "react";
import IconBase from "../IconBase";

class ${name}Icon extends IconBase {
  getIconComponent(props) {
    return (
      ${code}
    )
  }
}

${name}Icon.displayName = "Icon${name}";

export default ${name}Icon;
`;

  return result
}

module.exports = reactDomTemplate
