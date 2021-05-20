import * as React from "react";
import CardBase, { ActionProps } from "../CardBase";
import IconPlaylist from "../Icons/Playlist";
import { ViewProps } from "../View";

export interface Props extends ViewProps {
  title?: string;
  subTitle?: string;
  skeleton?: boolean;
  thumbnail?: string;
  customActionItemsRenderer?: (actionProps: ActionProps) => React.ReactNode;
}

const CardListIndex = (props: Props) => {
  return (
    <CardBase
      type="playlist"
      ratioThumbnail={1}
      badgeIcon={IconPlaylist}
      subTitleStyle={{
        lineClamp: 3,
      }}
      badgeIconContainer={{
        backgroundColor: "contrast",
        backgroundOpacity: "heroOverlayImage",
      }}
      badgeIconProps={{
        color: "background",
      }}
      {...props}
    />
  );
};

CardListIndex.displayName = "CardListIndex";

export default CardListIndex;
