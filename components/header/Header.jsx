import Link from 'next/link';

const Footer = () => (
  <header>
    <Link href='/fr'>
      <a>Home</a>
    </Link>
    <Link href='/fr/catalogue'>
      <a>Catalogue</a>
    </Link>
    <Link href='/fr/a-propos'>
      <a>A propos</a>
    </Link>
    <Link href='/fr/contact'>
      <a>Contact</a>
    </Link>
  </header>
);

export default Footer;
