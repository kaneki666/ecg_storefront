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
//
export interface ProductTag {
  id: number;
  title: string;
}

export interface ProductReview {
  id: number;
  user: ProductReviewUser;
  rating_number: number;
  review_text: string;
  created_at: string;
}

export interface ProductReviewUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

export interface SingleProductProps {
  id: number;
  title: string;
  slug: string;
  sku: string;
  warranty: string;
  avg_rating: number;
  full_description: string;
  short_description: string;
  status: string;
  is_featured: boolean;
  vendor: Vendor;
  category: Category;
  category_name: string;
  brand_name: string;
  sub_category: SubCategory;
  brand: Brand;
  unit: Category;
  price: number;
  old_price: number;
  purchase_price: number;
  tax_in_percent: number;
  discount_type: number;
  discount_amount: number;
  total_quantity: number;
  total_shipping_cost: number;
  shipping_time: number;
  thumbnail: string;
  youtube_link: number;
  product_tags: ProductTag[];
  product_reviews: ProductReview[];
  product_media: ProductMedia[];
  product_combinations: ProductCombination[];
}

export interface Brand {
  id: number;
  title: string;
  logo: null;
}

export interface Category {
  id: number;
  title: string;
}

export interface VarientTypeItem {
  id: number;
  sku: string;
  variant_type: VariantType;
  variant_value: string;
  variant_price: number;
  quantity: number;
  discount_type: null;
  discount_amount: number;
}

export interface VariantType {
  id: number;
  title: string;
}

export interface ProductCombination {
  id: number;
  product_attribute: Category;
  product_attribute_value: string;
  product_attribute_color_code: string;
  combination_media: any[];
  variant: VarientTypeItem[];
}

export interface ProductMedia {
  id: number;
  file: string;
}

export interface SubCategory {
  id: number;
  title: string;
  sub_sub_category: Category[];
}

export interface Vendor {
  id: number;
  store_data: any[];
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
