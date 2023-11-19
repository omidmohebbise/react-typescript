import React from "react";
import Header, { HeaderStatus } from "./header/header";
import Course from "../course/course";

interface MainLayoutProp {
  title: string;
}
const MainLayout: React.FC<MainLayoutProp> = ({ title }) => {
  return (
    <div className="p-3">
      <Header status={HeaderStatus.OPEN} title={title}></Header>
      <Course />
    </div>
  );
};
export default MainLayout;
