import * as React from "react";

const DrawerClose: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path d="M12.178 8.563a.966.966 0 0 0 .1-.122.22.22 0 0 0 .045-.122.216.216 0 0 0 .082-.16A1.98 1.98 0 0 0 12.414 8c0-.038-.003-.09-.01-.16a.216.216 0 0 0-.081-.16.284.284 0 0 1-.073-.121.285.285 0 0 0-.072-.122L9.07 4.225A.767.767 0 0 0 8.524 4a.767.767 0 0 0-.545.225.82.82 0 0 0-.218.564c0 .213.073.4.218.563l1.8 1.84H.781c-.243 0-.434.076-.573.226A.822.822 0 0 0 0 8c0 .238.07.432.209.582.14.15.33.226.573.226h8.996l-1.799 1.84a.82.82 0 0 0-.218.563c0 .213.073.4.218.564a.77.77 0 0 0 .545.225.766.766 0 0 0 .546-.225l3.107-3.212z" />
    <path
      fillRule="evenodd"
      d="M15.2 0a.8.8 0 0 1 .8.8v14.4a.8.8 0 0 1-1.6 0V.8a.8.8 0 0 1 .8-.8z"
      clipRule="evenodd"
    />
  </svg>
);

DrawerClose.displayName = "IconDrawerClose";

export default DrawerClose;
