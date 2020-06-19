import * as React from "react";
import IconBase from "../IconBase";

class IconGo1Logo extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M50.169 23.855h18.823v-4.08H61.91V4.282C61.91 1.713 60.23 0 57.658 0v4.034h-7.41v4.081h3.478c1.962 0 3.4-.981 3.932-2.53v14.19h-7.489v4.08zm-10.881-3.832h-4.87c-2.416 0-4.3-1.915-4.3-4.236v-3.669c0-2.32 1.884-4.236 4.3-4.236h4.87c2.454 0 4.338 1.916 4.338 4.236v3.669c0 2.313-1.884 4.236-4.338 4.236zm-13.586-6.082c0 6.16 4.503 10.32 10.725 10.32h.86c6.222 0 10.764-4.16 10.764-10.32S43.5 3.629 37.279 3.629h-.86c-6.214 0-10.717 4.16-10.717 10.312zM15.305 35.755H7.817c-2.009 0-3.44-1.222-3.44-2.897v-.327c0-1.713 1.431-2.975 3.44-2.975h7.489c2.008 0 3.478 1.262 3.478 2.975v.327c0 1.675-1.47 2.898-3.478 2.898zm-1.39-17.204H9.121c-2.33 0-4.213-1.752-4.213-4.034v-2.531c0-2.32 1.884-4.12 4.213-4.12h4.792c2.33 0 4.213 1.791 4.213 4.12v2.484c0 2.33-1.883 4.081-4.213 4.081zM23.2 32.578c0-4.447-3.072-7.056-9.451-7.056H5.73c-.985 0-1.595-.615-1.595-1.386 0-.818.618-1.426 1.595-1.426h6.058c6.261 0 10.764-3.956 10.764-9.743v-9.01c-1.759 0-3.276 1.098-3.932 2.608-1.634-1.838-4.135-2.936-7.325-2.936h-.656C4.995 3.63.492 7.461.492 13.131c0 2.897 1.189 5.093 3.15 6.565-2.086.608-3.564 2.282-3.564 4.44 0 2.001 1.227 3.59 3.072 4.283C1.188 29.517 0 31.23 0 33.559 0 37.477 3.846 40 11.374 40h.453c7.528 0 11.374-2.648 11.374-7.422z" />
      </svg>
    );
  }
}

IconGo1Logo.displayName = "IconGo1Logo";

export default IconGo1Logo;
