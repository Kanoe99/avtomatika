import * as React from "react";

import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  label?: string;
  upStyle?: string;
  downStyle?: string;
  outerDiv?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      onChange,
      outerDiv,
      upStyle,
      downStyle,
      label,
      icon,
      className,
      type,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const handleClick = () => {
      setIsFocused(true);
    };
    const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
      if (
        e.target.value === "" ||
        (document.hasFocus() !== true && e.target.value === "")
      ) {
        setIsFocused(false);
      }
      if (e.target.value !== "") {
        setIsFocused(true);
      }
    };

    let style = isFocused
      ? `absolute bg-[#272140] !text-sm left-4 top-4 pointer-events-none translate-x-1 -translate-y-4 text-[1.6875rem] text-white px-2 transition duration-200 ${upStyle}`
      : `pointer-events-none text-md absolute left-0 top-4 transition duration-200 text-white/50 ${downStyle}`;

    return (
      <div className={outerDiv}>
        <input
          type={type}
          className={cn(
            "flex h-9 w-full rounded-sm bg-transparent px-3 py-3 text-sm shadow-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground border-[2px] border-gray-300 focus-visible:outline-none focus-visible:border-[#e6e525] disabled:opacity-50 focus-visible:caret-[#e6e525] transition duration-200 text-white",
            className
          )}
          ref={ref}
          {...props}
          onMouseDown={() => {
            handleClick();
          }}
          onBlur={(e) => {
            handleBlur(e);
          }}
          onChange={onChange}
        />
        <span
          className={`${className} absolute top-[0.3rem] left-[0.75rem] text-md text-[#fff]/50 px-0 pointer-events-none !transition !duration-200 !ease-in-out  ${style}`}
        >
          {label}
        </span>
        {icon}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
