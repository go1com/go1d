import * as React from "react";
import Theme from "../../Theme";
import View from "../../View";

import IconBlockQuote from "../../Icons/BlockQuote";
import IconBold from "../../Icons/Bold";
import IconDynamicValues from "../../Icons/Braces";
import IconHeadingThree from "../../Icons/HeadingThree";
import IconHeadingTwo from "../../Icons/HeadingTwo";
import IconItalic from "../../Icons/Italic";
import IconLink from "../../Icons/Link";
import IconOlList from "../../Icons/OlList";
import IconStrikethrough from "../../Icons/Strikethrough";
import IconUlList from "../../Icons/UlList";
import IconUnderline from "../../Icons/Underline";
import { DynamicValue, DynamicValuesButton } from "./DynamicValuesButton";
import { FormatButton } from "./FormatButton";

export interface Props {
  onClickMarked: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
  onClickBlock: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
  onClickLink: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
  onInsertText: (text: string) => void;
  blockActive: (type: string) => boolean;
  markActive: (type: string) => boolean;
  linkActive: () => boolean;
  boldFormatOption: boolean;
  italicFormatOption: boolean;
  underlineFormatOption: boolean;
  strikethroughFormatOption: boolean;
  h2FormatOption: boolean;
  h3FormatOption: boolean;
  blockquoteFormatOption: boolean;
  linkFormatOption: boolean;
  numberedListFormatOption: boolean;
  bulletListFormatOption: boolean;
  dynamicValues?: DynamicValue[];
}

const FormatOptions: React.SFC<Props> = ({
  onClickMarked,
  onClickBlock,
  onInsertText,
  blockActive,
  markActive,
  linkActive,
  onClickLink,
  boldFormatOption,
  italicFormatOption,
  underlineFormatOption,
  strikethroughFormatOption,
  h2FormatOption,
  h3FormatOption,
  blockquoteFormatOption,
  linkFormatOption,
  numberedListFormatOption,
  bulletListFormatOption,
  dynamicValues = [],
}: Props) => (
  <Theme.Consumer>
    {({ colors }) => (
      <View flexDirection="row" flexWrap="wrap">
        {h2FormatOption && (
          <FormatButton
            data-testid="blockHeadingTwo"
            onClick={onClickBlock}
            type="heading-two"
            icon={IconHeadingTwo}
            active={blockActive("heading-two")}
            colors={colors}
          />
        )}
        {h3FormatOption && (
          <FormatButton
            data-testid="blockHeadingThree"
            onClick={onClickBlock}
            type="heading-three"
            icon={IconHeadingThree}
            active={blockActive("heading-three")}
            colors={colors}
          />
        )}
        {boldFormatOption && (
          <FormatButton
            data-testid="markBold"
            onClick={onClickMarked}
            type="bold"
            icon={IconBold}
            active={markActive("bold")}
            colors={colors}
          />
        )}
        {italicFormatOption && (
          <FormatButton
            data-testid="markItalic"
            onClick={onClickMarked}
            type="italic"
            icon={IconItalic}
            active={markActive("italic")}
            colors={colors}
          />
        )}
        {underlineFormatOption && (
          <FormatButton
            data-testid="markUnderline"
            onClick={onClickMarked}
            type="underline"
            icon={IconUnderline}
            active={markActive("underline")}
            colors={colors}
          />
        )}
        {strikethroughFormatOption && (
          <FormatButton
            data-testid="markStrikethrough"
            onClick={onClickMarked}
            type="strikethrough"
            icon={IconStrikethrough}
            active={markActive("strikethrough")}
            colors={colors}
          />
        )}
        {blockquoteFormatOption && (
          <FormatButton
            data-testid="blockBlockquote"
            onClick={onClickBlock}
            type="block-quote"
            icon={IconBlockQuote}
            active={blockActive("block-quote")}
            colors={colors}
          />
        )}
        {linkFormatOption && (
          <FormatButton
            data-testid="inlineLink"
            onClick={onClickLink}
            type="link"
            icon={IconLink}
            active={linkActive()}
            colors={colors}
          />
        )}
        {numberedListFormatOption && (
          <FormatButton
            data-testid="blockNumberedList"
            onClick={onClickBlock}
            type="numbered-list"
            icon={IconOlList}
            active={blockActive("numbered-list")}
            colors={colors}
          />
        )}
        {bulletListFormatOption && (
          <FormatButton
            data-testid="blockBulletedList"
            onClick={onClickBlock}
            type="bulleted-list"
            icon={IconUlList}
            active={blockActive("bulleted-list")}
            colors={colors}
          />
        )}
        {dynamicValues.length > 0 && (
          <DynamicValuesButton
            data-testid="dynamicValuesButton"
            onTextInsert={onInsertText}
            dynamicValues={dynamicValues}
            type="dynamic-value"
            active={false}
            icon={IconDynamicValues}
            colors={colors}
          />
        )}
      </View>
    )}
  </Theme.Consumer>
);

FormatOptions.displayName = "FormatOptions";

export default FormatOptions;
