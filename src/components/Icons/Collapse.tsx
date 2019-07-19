import * as React from "react";

const Collapse: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path d="M15.248 0a.747.747 0 0 0-.513.202L9.927 4.938V2.241a.732.732 0 0 0-.224-.55.747.747 0 0 0-.528-.198.747.747 0 0 0-.528.198.732.732 0 0 0-.224.55v4.478c0 .042.002.087.007.132.01.09.045.168.1.229a.824.824 0 0 0 .313.314.401.401 0 0 0 .21.078c.047.004.088.007.122.007h4.554c.198 0 .381-.06.529-.2a.746.746 0 0 0 .224-.56.732.732 0 0 0-.224-.55.747.747 0 0 0-.529-.199h-2.723l4.762-4.682a.743.743 0 0 0 0-1.08L15.76.202A.747.747 0 0 0 15.248 0zM2.27 8.521a.747.747 0 0 0-.528.2.746.746 0 0 0-.224.56c0 .214.072.406.224.55.148.139.33.199.529.199h2.724L.232 14.712a.742.742 0 0 0 0 1.08l.008.006c.146.133.32.202.512.202a.747.747 0 0 0 .513-.201l4.808-4.737v2.697c0 .214.072.406.224.55.147.138.33.198.528.198s.381-.06.528-.198a.732.732 0 0 0 .224-.55V9.281a1.32 1.32 0 0 0-.007-.132.392.392 0 0 0-.1-.229.824.824 0 0 0-.313-.314.401.401 0 0 0-.21-.078 1.425 1.425 0 0 0-.122-.007H2.271z" />
  </svg>
);

Collapse.displayName = "IconCollapse";

export default Collapse;
