import * as React from "react";

export type AddedIconProps = React.SVGProps<SVGSVGElement> & {
  width?: number | string;
  height?: number | string;
  color?: string;
};

const AddedIcon = React.forwardRef<SVGSVGElement, AddedIconProps>(
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
      <polyline points="7.5 12.5 10.5 15.5 16.5 9" />
    </svg>
  )
);

AddedIcon.displayName = "AddedIcon";

export default React.memo(AddedIcon);
