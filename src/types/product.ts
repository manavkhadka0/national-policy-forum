// ----------------------------------------------------------------------

export type IProductItemHeroProps = {
  title: string;
  caption: string;
  cover: string;
  label: string;
};

export type IProductItemCompareProps = {
  id: string;
  name: string;
  price: number;
  cover: string;
  details: string[];
  ratingNumber: number;
};

export type IProductItemProps = {
  id: string;
  name: string;
  sold: number;
  label: string;
  price: number;
  caption: string;
  stock: number;
  cover: string;
  category: string;
  images: string[];
  priceSale: number;
  ratingNumber: number;
  description: string;
  totalReviews: number;
};

export type IProductFiltersProps = {
  filterTag: string[];
  filterStock: boolean;
  filterBrand: string[];
  filterShipping: string[];
  filterCategories: string;
  filterRating: string | null;
  filterPrice: {
    start: number;
    end: number;
  };
};

export type IProductOrderProps = {
  id: string;
  item: string;
  price: number;
  status: string;
  orderId: string;
  deliveryDate: Date;
};
