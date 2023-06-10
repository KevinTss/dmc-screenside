import { ReactNode } from 'react'
import { Footer } from 'src/components/footer'
import { Head } from 'src/components/head'
import { Header } from 'src/components/header'

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
