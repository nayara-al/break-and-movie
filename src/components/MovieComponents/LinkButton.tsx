import { LinkHTMLAttributes } from "react";
import { Link } from "react-router-dom";

interface LinkButtonProps extends LinkHTMLAttributes<HTMLLinkElement> {
  link_path: string;
}

export default function LinkButton({ link_path, ...props }: LinkButtonProps) {
  return (
    <Link
      to={link_path}
      className="px-1 py-2 bg-red-600 text-white font-semibold rounded hover:bg-blue-600 transition-colors duration-300 ease-in-out"
    >
      {props.children}
    </Link>
  );
}
