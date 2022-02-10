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
