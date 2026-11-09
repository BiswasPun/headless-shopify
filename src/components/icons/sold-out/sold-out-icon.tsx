import * as React from "react";

export type SoldOutIconProps = React.SVGProps<SVGSVGElement> & {
  width?: number | string;
  height?: number | string;
  color?: string;
};

const SoldOutIcon = React.forwardRef<SVGSVGElement, SoldOutIconProps>(
  ({ width = 20, height = 20, color = "currentColor", ...rest }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      aria-hidden={rest["aria-label"] ? undefined : true}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      stroke={color}
      {...rest}
    >
      <path d="M5 8h14l-1 13H6L5 8z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
      <line x1="3" y1="3" x2="21" y2="21" />
    </svg>
  )
);

SoldOutIcon.displayName = "SoldOutIcon";

export default React.memo(SoldOutIcon);
