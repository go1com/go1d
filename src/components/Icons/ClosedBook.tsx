import * as React from 'react';
import IconBase from "../IconBase";

class IconClosedBook extends IconBase {
  getIconComponent(props) {
    return (
      <svg width="15" height="18" viewBox="0 0 15 18" fill="none" {...props}>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.67963 13.5392C2.26687 13.5392 1.87312 13.6998 1.58447 13.9824C1.29617 14.2645 1.13623 14.6449 1.13623 15.0392C1.13623 15.3154 0.912373 15.5392 0.63623 15.5392C0.360088 15.5392 0.13623 15.3154 0.13623 15.0392C0.13623 14.3727 0.406861 13.7357 0.884989 13.2677C1.36275 12.8001 2.0085 12.5392 2.67963 12.5392H13.714C13.9901 12.5392 14.214 12.7631 14.214 13.0392C14.214 13.3154 13.9901 13.5392 13.714 13.5392H2.67963Z"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="0.5"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.67963 1.53955C2.26687 1.53955 1.87312 1.70014 1.58447 1.98266C1.29617 2.26484 1.13623 2.64523 1.13623 3.03955V15.0392C1.13623 15.4336 1.29617 15.8143 1.58447 16.0964C1.87312 16.379 2.26687 16.5396 2.67963 16.5396H13.214V1.53955H2.67963ZM2.67963 0.539551C2.0085 0.539551 1.36275 0.800393 0.884989 1.26801C0.406861 1.73598 0.13623 2.373 0.13623 3.03955V15.0392C0.13623 15.7058 0.406861 16.3431 0.884989 16.8111C1.36275 17.2787 2.0085 17.5396 2.67963 17.5396H13.714C13.9901 17.5396 14.214 17.3157 14.214 17.0396V1.03955C14.214 0.763408 13.9901 0.539551 13.714 0.539551H2.67963Z"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="0.5"
        />
      </svg>
    );
  }
}
IconClosedBook.displayName = 'IconClosedBook';

export default IconClosedBook;
