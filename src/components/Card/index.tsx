import * as React from "react";
import CardBase from "../CardBase";
import { ViewProps } from "../View";

export interface Props extends ViewProps {
  title?: string;
  subTitle?: string;
  type?: string;
  skeleton?: boolean;
  thumbnail?: string;
  metadata?: string[];
  customActionItems?: React.ReactNode[];
  moreMenuItems?: any[];
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
