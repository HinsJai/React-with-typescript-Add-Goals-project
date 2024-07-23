import { type ReactNode } from "react";

type GoalsImgProps = {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
};

export default function Header({ image, children }: GoalsImgProps) {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
}
