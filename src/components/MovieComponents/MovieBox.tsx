import { HTMLAttributes } from "react";

interface MovieBoxProps extends HTMLAttributes<HTMLDivElement> {}

export default function MovieBox({ ...props }: MovieBoxProps) {
  return <div {...props} className="p-4 bg-white flex flex-col justify-center items-center gap-4 rounded-xl">{props.children}</div>;
}
