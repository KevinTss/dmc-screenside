type ProductPrice = {
  amount: string;
  currencyCode: string;
};

export type ProductFromShopify = {
  id: string;
  handle: string;
  title: string;
  // images: {
  //   edges: {
  //     node: {
  //       originalSrc: string;
  //     };
  //   }[];
  // };
  variants: {
    edges: {
      node: {
        id: string;
        priceV2: ProductPrice;
        compareAtPriceV2: ProductPrice;
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

export type Product = {
  handle: string;
  title: string;
  imageUrl?: string;
  price: ProductPrice;
  variantId: string;
  description: string;
};
