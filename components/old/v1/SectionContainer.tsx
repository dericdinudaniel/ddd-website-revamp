import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SectionContainer = ({ children }: Props) => {
  return <section>{children}</section>;
};

export default SectionContainer;
