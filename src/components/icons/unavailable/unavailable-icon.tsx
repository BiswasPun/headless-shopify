import * as React from "react";

export type UnavailableIconProps = React.SVGProps<SVGSVGElement> & {
  width?: number | string;
  height?: number | string;
  color?: string;
};

const UnavailableIcon = React.forwardRef<SVGSVGElement, UnavailableIconProps>(
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
      <circle cx="12" cy="12" r="10" />
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
    </svg>
  )
);

UnavailableIcon.displayName = "UnavailableIcon";

export default React.memo(UnavailableIcon);
