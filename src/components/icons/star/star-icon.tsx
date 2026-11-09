import * as React from "react";

export type StarIconProps = React.SVGProps<SVGSVGElement> & {
  width?: number | string;
  height?: number | string;
  color?: string;
  /** Color of the unfilled part of the star. */
  emptyColor?: string;
  /** How much of the star is filled, from 0 to 1 (e.g. 0.5 = half star). */
  fillPercentage?: number;
};

const STAR_PATH =
  "M10 1l2.39 6.53H19l-5.3 4.09 1.91 6.38L10 14.27 4.39 18l1.91-6.38L1 7.53h6.61z";

const StarIcon = React.forwardRef<SVGSVGElement, StarIconProps>(
  (
    {
      width = 20,
      height = 20,
      color = "currentColor",
      emptyColor = "#d1d5db",
      fillPercentage = 1,
      ...rest
    },
    ref
  ) => {
    const clipId = React.useId();
    const fill = Math.min(1, Math.max(0, fillPercentage));

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        width={width}
        height={height}
        aria-hidden={rest["aria-label"] ? undefined : true}
        {...rest}
      >
        <defs>
          <clipPath id={clipId}>
            <rect x="0" y="0" width={fill * 20} height="20" />
          </clipPath>
        </defs>
        {fill < 1 && <path fill={emptyColor} d={STAR_PATH} />}
        <path fill={color} clipPath={`url(#${clipId})`} d={STAR_PATH} />
      </svg>
    );
  }
);

StarIcon.displayName = "StarIcon";

export default React.memo(StarIcon);
