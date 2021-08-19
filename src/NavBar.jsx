import { NavBar, Icon } from 'antd-mobile';
import * as React from 'react';

const NavBarr = () => {

    return (
        <div>
            <NavBar
      mode="dark"
      leftContent="Back"
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
        <Icon key="1" type="ellipsis" />,
      ]}
    >MarHabTech Learning</NavBar>
        </div>
    )
}

export default NavBarr;