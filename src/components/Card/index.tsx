import * as React from "react";
import CardBase, { ActionProps } from "../CardBase";
import { ViewProps } from "../View";

export interface Props extends ViewProps {
  title?: string;
  subTitle?: string;
  type?: string;
  skeleton?: boolean;
  thumbnail?: string;
  metadata?: string[];
  moreMenuItems?: any[];
  customActionItemsRenderer?: (actionProps: ActionProps) => React.ReactNode;
}

const Card = (props: Props) => {
  return (
    <CardBase
      subTitleStyle={{
        lineClamp: 1,
      }}
      ratioThumbnail={1}
      {...props}
    />
  );
};

Card.displayName = "Card";

export default Card;
