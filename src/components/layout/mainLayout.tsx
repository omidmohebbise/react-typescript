import React from 'react';
import Header, { HeaderStatus } from './header/header';

interface MainLayoutProp {
    title : string
}
const MainLayout: React.FC<MainLayoutProp> = ({title})=>{
    return(
        <div>
            <Header status={HeaderStatus.OPEN} title={title}></Header>
        </div>
    )
}
export default MainLayout;