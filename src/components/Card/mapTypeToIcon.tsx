import * as React from "react";
import SpotIcon from "../SpotIcon";

const mapTypeToIcon = (type: string, params?: any): React.ReactElement => {
  const options = {
    minHeight: 48,
    minWidth: 48,
    ...params,
  };
  switch (type) {
    case "audio":
      return <SpotIcon name="Audio" {...options} />;
    case "award":
      return <SpotIcon name="Award" {...options} />;
    case "course":
      return <SpotIcon name="Course" {...options} />;
    case "document":
      return <SpotIcon name="Document" {...options} />;
    case "integration":
      return <SpotIcon name="Integration" {...options} />;
    case "interactive":
      return <SpotIcon name="Interactive" {...options} />;
    case "link":
      return <SpotIcon name="Link" {...options} />;
    case "text":
      return <SpotIcon name="Text" {...options} />;
    case "video":
      return <SpotIcon name="Video" {...options} />;
    default:
      return <SpotIcon name="Course" {...options} />;
  }
};

export default mapTypeToIcon;
