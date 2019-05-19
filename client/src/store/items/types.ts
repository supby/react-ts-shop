export interface ItemsListState {
  isLoading: boolean;
  items: Item[];
  page: number;
}

export interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
}
