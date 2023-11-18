
import React from 'react';

export enum HeaderStatus {
  OPEN, CLOSE

}
interface HeaderProps {
  status: HeaderStatus;
  title: string;
}
const isOpen = (state: HeaderStatus): boolean => state === HeaderStatus.OPEN;

const Header: React.FC<HeaderProps> = ({ status, title }) => {
  return (   
    (<div>
      <h1>{title}</h1>
    </div>)
  
  );
}

export default Header;