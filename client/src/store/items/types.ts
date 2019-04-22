export interface ItemsListState {
    isLoading: boolean;
    items: Item[];
}

export interface Item {
    id: number;
    title: string;
    description: string;
}