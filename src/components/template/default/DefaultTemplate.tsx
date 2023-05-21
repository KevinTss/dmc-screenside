import { ReactNode } from 'react'
import { Header, Head, Footer } from 'src/components';

import { Main } from './DefaultTemplate.styles';

type Props = {
  children: ReactNode
}

export const DefaultTemplate = ({ children }: Props) => (
  <>
    <Head />
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
);
