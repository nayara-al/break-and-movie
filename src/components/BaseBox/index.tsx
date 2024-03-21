import { HTMLAttributes } from "react";

interface BoxBaseProps extends HTMLAttributes<HTMLDivElement> {}

export default function BoxBase({...props}: BoxBaseProps) {
  return <div {...props} className="">{props.children}</div>;
}