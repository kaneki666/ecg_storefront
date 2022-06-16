export interface CategoriesProps {
  id: number;
  name: string;
  product_sub_category: SubCategoryProps[];
  logo?: string;
  cover?: string;
}

export interface SubCategoryProps {
  id: number;
  name: string;
  child_category: ChildCategoryProps[];
}

export interface ChildCategoryProps {
  id: number;
  name: string;
}

export interface CouponProps {
  id: number;
  code: string;
  amount: number;
  is_active: boolean;
}

export interface SingleProductProps {
  id: number;
  title: string;
  slug: string;
  price: number;
  old_price: number;
  short_description: string;
  quantity: number;
  rating: string;
  status: string;
  is_featured: boolean;
  product_category: number;
  product_category_name: string;
  product_brand: number;
  thumbnail: string;
  product_media: any[];

  full_description: string;

  warranty: string;
  variation: string;

  vendor: number;
}

export interface ProductListProps {
  deals_of_the_day: any;
  count: number;
  next: null;
  previous: null;
  results: SingleProductProps[];
}

export interface HomePageApiProps {
  slider_images: any[];
  deals_of_the_day: DealsOfTheDayProps[];
  top_20_best_seller: SingleProductProps[];
  product_cat_serializer: ProductCatSerializerProps[];
  new_arrivals: SingleProductProps[];
  featured: SingleProductProps[];
  most_popular: SingleProductProps[];
}

export interface DealsOfTheDayProps {
  id: number;
  product: SingleProductProps[];
  discount_price: number;
  discount_price_type: string;
  start_date: string;
  end_date: string;
}

// export interface ProductMedumProps {
//   id: number;
//   type: string;
//   file: string;
//   status: string;
// }

// export interface Top20BestSellerProps {
//   id: number;
//   title: string;
//   slug: string;
//   price: number;
//   rating: string;
//   thumbnail: string;
// }

export interface ProductCatSerializerProps {
  id: number;
  name: string;
  logo: any;
  cover: any;
}

// export interface NewArrivalProps {
//   id: number;
//   title: string;
//   slug: string;
//   price: number;
//   rating: string;
//   thumbnail: string;
// }

// export interface FeaturedProps {
//   id: number;
//   title: string;
//   slug: string;
//   price: number;
//   rating: string;
//   thumbnail: string;
// }

// export interface MostPopularProps {
//   id: number;
//   title: string;
//   slug: string;
//   price: number;
//   rating: string;
//   thumbnail: string;
//   average_rating: any;
// }
