import React, { useState } from 'react';

import useIsMobile from '../../hooks/useIsMobile';

import Auth from '../Auth/Auth';
import MobileTopbar from './MobileTopbar';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

import { LayoutContainer, MainContainer, PageContent } from './styles';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isMobile = useIsMobile();

  return (
    <LayoutContainer>
      <Sidebar
        isOpen={!isMobile || (isMobile && isOpen)}
        onClose={() => setIsOpen(false)}
      />
      <MainContainer>
        {isMobile ? (
          <MobileTopbar onOpen={() => setIsOpen(true)} />
        ) : (
          <Topbar />
        )}
        <PageContent>{children}</PageContent>
      </MainContainer>
      <Auth />
    </LayoutContainer>
  );
};

export default Layout;
