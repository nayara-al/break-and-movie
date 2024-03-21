interface ImageProps {
  src_path: string;
}

export default function Image({ src_path }: ImageProps) {
  return <img src={src_path} className="w-52 h-auto"/>;
}
