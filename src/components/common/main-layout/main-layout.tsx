import { Header, Footer } from '../common';

const MainLayout = ({ children }:{children:React.ReactNode}) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default MainLayout;
