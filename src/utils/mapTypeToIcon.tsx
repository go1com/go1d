import * as React from "react";
import SpotIcon from "../components/SpotIcon";

const mapTypeToIcon = (type: string, params?: any): React.ReactElement => {
  const options = {
    minHeight: 48,
    minWidth: 48,
    ...params,
  };

  const iconTypeNames = {
    "web-content": "WebLink",
    audio: "Audio",
    award: "Award",
    course: "Course",
    document: "Document",
    integration: "Integration",
    link: "Link",
    text: "Text",
    resource: "Text",
    video: "Video",
    playlist: "Playlist",
  };

  return <SpotIcon name={iconTypeNames[type] || "Course"} {...options} />;
};

export default mapTypeToIcon;
