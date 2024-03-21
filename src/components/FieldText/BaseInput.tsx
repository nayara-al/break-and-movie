import { HTMLAttributes } from "react";

interface BaseInputProps extends HTMLAttributes<HTMLDivElement> {}

export default function BaseInput({ ...props }: BaseInputProps) {
  return (
    <div {...props} className="">
      {props.children}
    </div>
  );
}
