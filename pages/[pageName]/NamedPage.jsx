import { useRouter } from 'next/router';

import Template from '../../components/template/default';

const NamedPage = () => {
  const router = useRouter();
  const { pageName } = router.query;

  if (!pageName) return null;

  return (
    <Template>
      <h1>Page in lang named: {pageName}</h1>
    </Template>
  );
};

export default NamedPage;
