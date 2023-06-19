import { ReactNode } from 'react'
import { Footer } from 'src/components/footer'
import { Head } from 'src/components/head'
import { Header } from 'src/components/header'

import { Main } from './DefaultTemplate.styles';

type Props = {
  children: ReactNode;
  forceHeaderBlack?: boolean
}

export const DefaultTemplate = ({ children, forceHeaderBlack = false }: Props) => (
  <>
    <Head />
    <Header isBlack={forceHeaderBlack} />
    <Main>{children}</Main>
    <Footer />
  </>
);
