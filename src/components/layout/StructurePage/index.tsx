import { HTMLAttributes } from "react";

interface StructurePageProps extends HTMLAttributes<HTMLDivElement> {}
export default function StructurePage({ ...props }: StructurePageProps) {
  return (
    <main {...props} className="p-10 flex flex-col items-center justify-center">
      {props.children}
    </main>
  );
}
