import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { MatrixBackground } from "./MatrixBackground";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <MatrixBackground />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
