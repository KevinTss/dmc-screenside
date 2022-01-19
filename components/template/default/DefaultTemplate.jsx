import { Main } from './style';
import Footer from '../../footer';
import Header from '../../header';

const DefaultTemplate = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
);

export default DefaultTemplate;
