import { Main } from './style';
import Footer from '../../footer';
import Header from '../../header';

export default function DefaultTemplate({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
