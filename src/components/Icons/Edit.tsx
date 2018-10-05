import * as React from "react";
import { Props as ViewProps } from "../View";

interface Props extends ViewProps {
  name: string;
  color?: string;
  size?: number;
}

const Edit: React.SFC<Props> = (props: Props) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path d="M15.756 4.234l-3.99-4.01A.804.804 0 0 0 11.204 0c-.213 0-.4.075-.562.225L.244 10.623a1.45 1.45 0 0 0-.178.253.648.648 0 0 0-.066.309v3.99c0 .25.075.447.225.59.15.144.343.216.58.216h3.991a.809.809 0 0 0 .319-.056.675.675 0 0 0 .243-.187l10.398-10.38a.772.772 0 0 0 0-1.124zM4.478 14.39H1.61v-2.885l9.593-9.593 2.866 2.885-9.592 9.593z" />
  </svg>
);

Edit.displayName = "IconEdit";

export default Edit;
