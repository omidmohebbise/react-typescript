import React from "react";
import "./header.css";
import logo from "../../../images/logo.png";

export enum HeaderStatus {
  OPEN,
  CLOSE,
}
interface HeaderProps {
  status: HeaderStatus;
  title: string;
}
const isOpen = (state: HeaderStatus): boolean => state === HeaderStatus.OPEN;

const Header: React.FC<HeaderProps> = ({ status, title }) => {
  return (
    <div className="d-flex justify-content-between ">
      <img src={logo} alt="logo" height={100} />
      <div className="d-flex">
        <div className="header-btn" role="button">
          Courses
        </div>
        <div className="header-btn" role="button">
          Consultant
        </div>
        <div className="header-btn" role="button">
          About
        </div>
      </div>
    </div>
  );
};

export default Header;
