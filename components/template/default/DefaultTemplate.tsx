import { ReactNode } from 'react'

import { Main } from './DefaultTemplate.styles';
// import Footer from '../../footer';
// import Header from '../../header';
// import Head from '../../head';

type Props = {
  children: ReactNode
}

export const DefaultTemplate = ({ children }: Props) => {
  return (
    <>
      {/* <Head /> */}
      {/* <Header /> */}
      <Main>{children}</Main>
      {/* <Footer /> */}
    </>
  );
}
