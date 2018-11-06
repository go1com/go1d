import * as React from "react";

const Tag: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path d="M14.583 9.611h-3.354l.319-3.203h3.035c.25 0 .446-.072.59-.216.143-.143.215-.34.215-.59 0-.237-.072-.428-.215-.571-.144-.144-.34-.216-.59-.216H11.79L12.185.9a.613.613 0 0 0-.14-.562.892.892 0 0 0-.572-.319.613.613 0 0 0-.562.14.893.893 0 0 0-.319.572l-.487 4.084H6.92L7.39.9a.613.613 0 0 0-.141-.562.892.892 0 0 0-.571-.319.613.613 0 0 0-.562.14.892.892 0 0 0-.319.572L5.31 4.815H1.806c-.25 0-.447.072-.59.216-.144.143-.216.334-.216.571 0 .25.072.447.215.59.144.144.34.216.59.216H5.16L4.841 9.61H1.806c-.25 0-.447.072-.59.216-.144.144-.216.334-.216.571 0 .25.072.447.215.59.144.144.34.216.59.216h2.792l-.393 3.915c-.05.2-.003.388.14.563a.892.892 0 0 0 .572.318h.074c.2 0 .375-.069.525-.206a.892.892 0 0 0 .281-.506l.487-4.084h3.185L9 15.119c-.05.2-.003.388.14.563a.892.892 0 0 0 .572.318h.075c.2 0 .374-.069.524-.206a.892.892 0 0 0 .281-.506l.487-4.084h3.504c.25 0 .446-.072.59-.216.143-.143.215-.34.215-.59a.775.775 0 0 0-.215-.571c-.144-.144-.34-.216-.59-.216zm-8.15 0l.319-3.203h3.203L9.637 9.61H6.433z" />
  </svg>
);

Tag.displayName = "IconTag";

export default Tag;
