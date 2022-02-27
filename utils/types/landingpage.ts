export interface CategoriesProps {
  id: number;
  name: string;
  sub_category: SubCategoryProps[];
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
}

export interface DealProductsProps {
  end_date: string;
  product: any;
  id: number;
  results: SingleProductProps[];
  discount_price: number;
  discount_price_type: string;
}

export interface ProductListProps {
  deals_of_the_day: any;
  count: number;
  next: null;
  previous: null;
  results: SingleProductProps[];
}

