import { Main } from './style';
import Footer from '../../footer';
import Header from '../../header';
import Head from '../../head';

export default function DefaultTemplate({ children }) {
  return (
    <>
      <Head />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
