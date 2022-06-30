export interface CategoriesProps {
  id: number;
  title: string;
  sub_category: SubCategoryProps[];
  logo?: string;
  cover?: string;
}

export interface SubCategoryProps {
  id: number;
  title: string;
  sub_sub_category: SubSubCategoryProps[];
}

export interface SubSubCategoryProps {
  id: number;
  title: string;
}

export interface ProductTag {
  id: number;
  title: string;
}

export interface ProductReview {
  id: number;
  user: number;
  rating_number: number;
  review_text: string;
}

export interface SingleProductProps {
  id: number;
  title: string;
  slug: string;
  warranty: string;
  full_description: string;
  short_description: string;
  status: string;
  vendor: number;
  category?: number;
  sub_category?: number;
  sub_sub_category?: number;
  brand: number;
  unit: number;
  unit_price: number;
  purchase_price: number;
  tax_in_percent: number;
  discount_type?: any;
  discount_amount: number;
  total_quantity: number;
  total_shipping_cost: number;
  shipping_time: number;
  thumbnail: string;
  youtube_link: string;
  product_tags: ProductTag[];
  product_reviews: ProductReview[];
  category_name?: string;
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
