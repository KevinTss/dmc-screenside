import { useCart, useLocale } from 'src/hooks';
import { getProductLeftBeforeOrder, getPercentageToNextMultiple } from 'src/utils';

import { Container, Text, ProgressContainer, ProgressBar } from './CartProgress.styles';

export const CartProgress = () => {
  const { t } = useLocale();
  const { products } = useCart()

  const productLeft = getProductLeftBeforeOrder(products)
  const percentage = getPercentageToNextMultiple(products)

  return (
    <Container>
      <Text
        dangerouslySetInnerHTML={{
          __html: productLeft
            ? t(
              'component.CartProgress.sentence',
              {
                articleLeft: `<b>${t(
                  'component.CartProgress.moreArticle',
                  {
                    number: productLeft,
                    plural: productLeft > 1 ? 's' : ''
                  }
                )}</b>`
              }
            )
            : t('component.CartProgress.canOrder')
        }}
      />
      <ProgressContainer>
        <ProgressBar
          style={{
            width: `${percentage}%`
          }}
        />
      </ProgressContainer>
    </Container>
  );
}
