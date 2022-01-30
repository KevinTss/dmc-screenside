import { Main } from './style';
import Footer from '../../footer';
import Header from '../../header';
import { useCart } from '../../../hooks';

const DefaultTemplate = ({ children }) => {
  useCart({ createCard: true });

  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default DefaultTemplate;
