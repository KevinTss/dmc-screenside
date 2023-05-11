export type ProductFromShopify = {
  id: string;
  handle: string;
  title: string;
  images: {
    edges: {
      node: {
        originalSrc: string;
      };
    }[];
  };
  variants: {
    edges: {
      node: {
        id: string;
        priceV2: {
          amount: string;
          currency: string;
        };
        compareAtPriceV2: {
          amount: string;
          currencyCode: string;
        };
      };
    }[];
  };
};

export type ProductContent = {
  handle: string;
  description_en: string;
  percentage_alcohol: number;
  ibu?: number;
};
