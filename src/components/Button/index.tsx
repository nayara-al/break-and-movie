import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
export default function Button({ ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge("text-white p-4 rounded-xl", props.className)}
    >
      {props.children}
    </button>
  );
}
