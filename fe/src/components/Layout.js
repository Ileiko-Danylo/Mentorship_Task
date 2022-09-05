import { Outlet } from 'react-router-dom';
import MenuAppBar from './MenuAppBar';

const Layout = () => {
  return (
    <>
      <MenuAppBar />
      <Outlet />
    </>
  );
};

export default Layout;
