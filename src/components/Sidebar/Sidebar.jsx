import React from 'react'
import styled from 'styled-components'
import { sidebarData } from '../../data';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';


const SidebarNav = styled.nav`
  background: #213161;
  width: 265px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 65px;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;


const Sidebar = () => {
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <SidebarNav>
          <SidebarWrap>
            {sidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  )
}

export default Sidebar
