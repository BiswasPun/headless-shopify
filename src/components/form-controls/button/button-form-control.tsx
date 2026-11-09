import React from "react";
import { cn } from "@/lib/clsx";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "full";
  loading?: boolean;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      loading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "font-black tracking-wider cursor-pointer transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 enabled:active:translate-y-0 enabled:active:scale-[0.98] enabled:active:shadow-none";

    // Hover styles use `enabled:` so disabled/loading buttons don't react.
    const variants = {
      primary:
        "bg-black text-white enabled:hover:bg-gray-800 enabled:hover:-translate-y-px enabled:hover:shadow-lg disabled:bg-gray-300 disabled:text-gray-500 focus:ring-gray-500",
      secondary:
        "bg-gray-200 text-black enabled:hover:bg-gray-300 enabled:hover:-translate-y-px enabled:hover:shadow-md disabled:bg-gray-100 disabled:text-gray-400 focus:ring-gray-400",
      outline:
        "border-2 border-black text-black enabled:hover:bg-black enabled:hover:text-white enabled:hover:-translate-y-px enabled:hover:shadow-lg disabled:border-gray-300 disabled:text-gray-400 focus:ring-gray-500",
      ghost:
        "text-black enabled:hover:bg-gray-100 disabled:text-gray-400 focus:ring-gray-400",
    };

    const sizes = {
      sm: "px-3 py-1 text-sm",
      md: "px-4 py-2",
      lg: "px-6 py-3 text-lg",
      full: "w-full py-2",
    };

    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          disabled && "cursor-not-allowed",
          loading && "cursor-wait",
          className
        )}
        disabled={disabled || loading}
        ref={ref}
        {...props}
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
            Loading...
          </div>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
