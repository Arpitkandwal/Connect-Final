import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: Props) => {
  return (
    <main>
      {children}
    </main>
  );
};

export default HomeLayout;
