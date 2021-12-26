import Footer from '../../footer';
import Header from '../../header';

const DefaultTemplate = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default DefaultTemplate;
