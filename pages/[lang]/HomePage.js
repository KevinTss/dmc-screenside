import { useRouter } from 'next/router';

import Template from '../../components/template/default';

const Home = () => {
  const router = useRouter();
  const { lang, pageName } = router.query;

  return (
    <Template>
      <h1>
        Page in {lang} named: {pageName}
      </h1>
    </Template>
  );
};

export default Home;
