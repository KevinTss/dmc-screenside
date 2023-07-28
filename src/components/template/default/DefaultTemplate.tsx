import { ReactNode } from 'react'

import { Main } from './DefaultTemplate.styles';
import { CartDrawer } from '../../../components/cart-drawer'
import { Footer } from '../../../components/footer'
import { Head } from '../../../components/head'
import { Header } from '../../../components/header'


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
    <CartDrawer />
  </>
);
