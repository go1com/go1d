const reactDomTemplate = (code, config, state) => {
  const name = state.componentName.replace('Svg', '')
  const result = `import * as React from "react";
import IconBase from "../IconBase";

class Icon${name} extends IconBase {
  getIconComponent(props) {
    return (
      ${code}
    )
  }
}

Icon${name}.displayName = "Icon${name}";

export default Icon${name};
`;

  return result
}

module.exports = reactDomTemplate
